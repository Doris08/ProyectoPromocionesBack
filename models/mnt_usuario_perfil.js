const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mnt_usuario_perfil', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mnt_perfil',
        key: 'id'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mnt_usuario',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'mnt_usuario_perfil',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mnt_usuario_perfil_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
