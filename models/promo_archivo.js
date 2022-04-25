const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo_archivo', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave primaria.",
      primaryKey: true
    },
    id_tipo_archivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave foranea, hace referencia al tipo de archivo correspondiente al registro.",
      references: {
        model: 'ctl_tipo_archivo',
        key: 'id'
      }
    },
    ruta: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "Hace referencia a la ruta donde está almacenado el archivo"
    },
    id_relacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "llave foranea la cual será especifica para cada tabla a relacionar.",
      references: {
        model: 'promo_establecimiento',
        key: 'id'
      }
    },
    tipo_modelo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Indica el nombre de la tabla a relacionar."
    }
  }, {
    sequelize,
    tableName: 'promo_archivo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "promo_archivo_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
