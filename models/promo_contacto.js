const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo_contacto', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave primaria.",
      primaryKey: true
    },
    id_relacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "llave foranea la cual será especifica para cada tabla a relacionar.",
      references: {
        model: 'promo_sucursal',
        key: 'id'
      }
    },
    id_tipo_contacto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave foranea, hace referencia al tipo de contacto a registrar (teléfono, ubicacion-mapa, correos etc)",
      references: {
        model: 'ctl_tipo_contacto',
        key: 'id'
      }
    },
    contacto: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Almacena el valor correspondiente al contacto a registrar."
    },
    tipo_modelo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Indica el nombre de la tabla a relacionar."
    }
  }, {
    sequelize,
    tableName: 'promo_contacto',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "promo_contacto_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
