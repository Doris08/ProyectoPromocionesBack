const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctl_tipo_aviso', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave primaria",
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Almacena el nombre correspondiente al tipo de aviso a registrar."
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "Indica el estado del registro en la base de datos: true=habilitado, false=deshabilitado."
    }
  }, {
    sequelize,
    tableName: 'ctl_tipo_aviso',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ctl_tipo_aviso_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
