const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctl_tipo_contacto', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ctl_tipo_contacto',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ctl_tipo_contacto_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
