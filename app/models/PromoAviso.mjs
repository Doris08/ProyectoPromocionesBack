import psql from 'sequelize';
import DB from '../nucleo/DB.mjs';
import CtlTipoAviso from './CtlTipoAviso.mjs';

class PromoAviso extends psql.Model {
  static associate() {
    this.belongsTo(CtlTipoAviso, {
      foreignKey: 'id_tipo_aviso',
    })
  }
}

PromoAviso.init({
    id: {
      autoIncrement: true,
      type: psql.Sequelize.INTEGER,
      allowNull: false,
      comment: "Llave primaria",
      primaryKey: true,
    },
    nombre: {
      type: psql.Sequelize.STRING(50),
      allowNull: false,
      comment: "Almacena el nombre correspondiente al aviso que se registrará."
    },
    descripcion: {
      type: psql.Sequelize.TEXT,
      allowNull: false,
      comment: "Almacena la descripcion correspondiente al aviso a registrar."
    },
    activo: {
      type: psql.Sequelize.BOOLEAN,
      allowNull: false,
      comment: "Indica el estado del registro en la base de datos: true=habilitado, false=deshabilitado."
    },
    id_tipo_aviso: {
      type: psql.Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    sequelize: DB.connection(),
    tableName: 'promo_aviso',
  });

export default PromoAviso;