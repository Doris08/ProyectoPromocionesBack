const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo_sucursal_promo_promocion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave primaria.",
      primaryKey: true
    },
    id_sucursal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "LLave foranea, hace referencia a la sucursal correspondiente a la promocion a registrar.",
      references: {
        model: 'promo_sucursal',
        key: 'id'
      }
    },
    id_promocion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave foranea, hace referencia a la promoción a registrar.",
      references: {
        model: 'promo_promociones',
        key: 'id'
      }
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "Indica el estado del registro en la base de datos: true=habilitado, false=deshabilitado."
    }
  }, {
    sequelize,
    tableName: 'promo_sucursal_promo_promocion',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "promo_sucursal_promo_promocion_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
