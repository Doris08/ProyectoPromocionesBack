import PromoAviso from '../models/PromoAviso.mjs';
import CtlTipoAviso from '../models/CtlTipoAviso.mjs';
import HttpCode from '../../configs/httpCode.mjs';
import UnprocessableEntityException from '../../handlers/UnprocessableEntityException.mjs';

export default class PromoAvisoController {

    static async index(req, res){
        const avisos = await PromoAviso.findAll();
        return res.status(HttpCode.HTTP_OK).json(avisos);
    }

    static async store(req, res) {
        const { nombre, descripcion, activo, id_tipo_aviso } = req.body;
            
        const tipo_aviso = await CtlTipoAviso.findOne({
            where: {
              id : id_tipo_aviso,
            },
          });
      
          if (!tipo_aviso ) throw new UnprocessableEntityException('UNPROCESSABLE_ENTITY', 422, 'No se encontró el tipo de aviso indicado');
    
        const promoAviso = await PromoAviso.create({
          nombre, descripcion, activo, id_tipo_aviso
        });
    
        return res.status(HttpCode.HTTP_CREATED).json(promoAviso);
    }

    static async show(req, res) {
        const { id } = req.params;
    
        if (Number.isNaN(id)) throw new UnprocessableEntityException('UNPROCESSABLE_ENTITY', 422, 'El parámetro no es un id válido');
    
        const tipo_aviso = await CtlTipoAviso.findOne({
            where: {
              id,
            },
          });
      
        if (!tipo_aviso) throw new UnprocessableEntityException('UNPROCESSABLE_ENTITY', 422, 'No se encontró el aviso indicado');
    
        const promoAviso = await PromoAviso.findOne({
            where: {
              id,
            },
          });
      
          return res.status(HttpCode.HTTP_OK).json(promoAviso);
    }

    static async update(req, res) {
        const { nombre, descripcion, activo, id_tipo_aviso } = req.body;
    
        const promoAviso = await PromoAviso.update(
          {
            nombre, descripcion, activo, id_tipo_aviso,
          },
          {
            where: {
              id: req.params.id,
            },
            returning: ['id'],
          },
        );
    
        return res.status(HttpCode.HTTP_OK).json(promoAviso[0]);
    }

    static async destroy(req, res) {
        const { id } = req.params;
        if (Number.isNaN(id)) throw new UnprocessableEntityException('UNPROCESSABLE_ENTITY', 422, 'El parámetro no es un id válido');
    
        await PromoAviso.destroy({
          where: {
            id: id
          },
        });
    
        return res.status(HttpCode.HTTP_OK).json({
          message: 'Aviso Eliminado',
        });
    }

}