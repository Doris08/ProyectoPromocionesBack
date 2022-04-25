const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctl_tipo_promocion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave primaria",
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Almacena el nombre correspondiente al tipo de promocion a registrar."
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "Indica el estado del registro en la base de datos: true=habilitado, false=deshabilitado."
    }
  }, {
    sequelize,
    tableName: 'ctl_tipo_promocion',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ctl_tipo_promocion_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
