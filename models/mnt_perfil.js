const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mnt_perfil', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    codigo: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mnt_perfil',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mnt_perfil_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
