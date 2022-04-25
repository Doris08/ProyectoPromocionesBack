import PromoEstablecimiento from '../models/PromoEstablecimiento.mjs';
import HttpCode from '../../configs/httpCode.mjs';
import UnprocessableEntityException from '../../handlers/UnprocessableEntityException.mjs';

export default class PromoEstablecimientoController{

    static async index(req, res){
        const establecimientos = await PromoEstablecimiento.findAll();
        return res.status(HttpCode.HTTP_OK).json(establecimientos);
    }

    static async store(req, res) {
        const { nombre, activo } = req.body;
            
        const promoEstablecimiento = await PromoEstablecimiento.create({
          nombre, activo
        });
    
        return res.status(HttpCode.HTTP_CREATED).json(promoEstablecimiento);
    }

    static async show(req, res) {
        const { id } = req.params;
    
        if (Number.isNaN(id)) throw new UnprocessableEntityException('UNPROCESSABLE_ENTITY', 422, 'El parámetro no es un id válido');
      
        if (!tipo_aviso) throw new UnprocessableEntityException('UNPROCESSABLE_ENTITY', 422, 'No se encontró el aviso indicado');
    
        const promoAviso = await PromoAviso.findOne({
            where: {
              id,
            },
          });
      
          return res.status(HttpCode.HTTP_OK).json(promoAviso);
    }

}