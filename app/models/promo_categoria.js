const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo_categoria', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "llave primaria",
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Este campo indica el nombre de la categoría a registrar."
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Indica una breve descripcion de la categoria a registrar."
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "Indica el estado del registro en la base de datos: true=habilitado, false=deshabilitado."
    }
  }, {
    sequelize,
    tableName: 'promo_categoria',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "promo_categoria_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
