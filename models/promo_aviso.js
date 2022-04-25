const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo_aviso', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave primaria",
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Almacena el nombre correspondiente al aviso que se registrará."
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Almacena la descripcion correspondiente al aviso a registrar."
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "Indica el estado del registro en la base de datos: true=habilitado, false=deshabilitado."
    },
    id_tipo_aviso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave foranea,hace referencia al tipo de aviso que corresponde.",
      references: {
        model: 'ctl_tipo_aviso',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'promo_aviso',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "promo_aviso_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
