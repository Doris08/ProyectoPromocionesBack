const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo_sucursal', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave primaria.",
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Almacena el nombre de la sucursal a registrar."
    },
    id_establecimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave foranea, hace referencia al establecimiento que pertenece la sucursal.",
      references: {
        model: 'promo_establecimiento',
        key: 'id'
      }
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave foranea, hace referencia al departamento que pertenece la sucursal."
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    id_municipio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave foranea, hace referencia al municipio al que pertenece la sucursal a registrar."
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "Este campo almacena el detalle de la dirección de la sucursal a registrar."
    }
  }, {
    sequelize,
    tableName: 'promo_sucursal',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "promo_sucursal_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
