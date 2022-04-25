const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mnt_perfil_rol', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mnt_perfil',
        key: 'id'
      }
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mnt_rol',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'mnt_perfil_rol',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mnt_perfil_rol_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
