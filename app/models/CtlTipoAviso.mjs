import psql from 'sequelize';
import DB from '../nucleo/DB.mjs';

class CtlTipoAviso extends psql.Model {
  static associate() {
  }
}

CtlTipoAviso.init({
    id: {
      type: psql.Sequelize.INTEGER,
      allowNull: false,
      comment: "Llave primaria",
      primaryKey: true
    },
    nombre: {
      type: psql.Sequelize.STRING(50),
      allowNull: false,
      comment: "Almacena el nombre correspondiente al tipo de aviso a registrar."
    },
    activo: {
      type: psql.Sequelize.BOOLEAN,
      allowNull: false,
      comment: "Indica el estado del registro en la base de datos: true=habilitado, false=deshabilitado."
    }
  }, {
    timestamps: false,
    sequelize: DB.connection(),
    tableName: 'ctl_tipo_aviso',
  });

  export default CtlTipoAviso;
  