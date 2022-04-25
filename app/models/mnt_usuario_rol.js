const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mnt_usuario_rol', {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mnt_usuario',
        key: 'id'
      }
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mnt_rol',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'mnt_usuario_rol',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mnt_usuario_rol_pkey",
        unique: true,
        fields: [
          { name: "id_usuario" },
          { name: "id_rol" },
        ]
      },
    ]
  });
};
