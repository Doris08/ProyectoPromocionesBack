import psql from 'sequelize';
import DB from '../nucleo/DB.mjs';

class PromoEstablecimiento extends psql.Model {
  static associate() {
  }
}

PromoEstablecimiento.init({
    id: {
      autoIncrement: true,
      type: psql.Sequelize.INTEGER,
      allowNull: false,
      comment: "llave primaria.",
      primaryKey: true
    },
    nombre: {
      type: psql.Sequelize.STRING(50),
      allowNull: false,
      comment: "Almacena el nombre del establecimiento en la base de datos."
    },
    activo: {
      type: psql.Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "Indica el estado del registro en la base de datos: true=habilitado, false=deshabilitado."
    }
  }, {
    timestamps: false,
    sequelize: DB.connection(),
    tableName: 'promo_establecimiento',
  });

  export default PromoEstablecimiento;