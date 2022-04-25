const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctl_tipo_archivo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave primaria.",
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Hace referencia al nombre del tipo de archivo a registrar (logo, banner etc....)"
    }
  }, {
    sequelize,
    tableName: 'ctl_tipo_archivo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ctl_tipo_archivo_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
