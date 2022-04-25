const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo_establecimiento', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "llave primaria.",
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Almacena el nombre del establecimiento en la base de datos."
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "Indica el estado del registro en la base de datos: true=habilitado, false=deshabilitado."
    }
  }, {
    sequelize,
    tableName: 'promo_establecimiento',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "promo_establecimiento_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
