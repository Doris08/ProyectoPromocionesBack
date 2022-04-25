const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mnt_rol', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mnt_rol',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mnt_rol_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
