const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mnt_ruta_rol', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_ruta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mnt_ruta',
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
    tableName: 'mnt_ruta_rol',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mnt_ruta_rol_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
