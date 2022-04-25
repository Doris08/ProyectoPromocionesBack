const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mnt_ruta', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nombre_uri: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mostrar: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    icono: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    publico: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    id_ruta_padre: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mnt_ruta',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mnt_ruta_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
