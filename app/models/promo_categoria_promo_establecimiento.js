const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo_categoria_promo_establecimiento', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave primaria.",
      primaryKey: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave foranea, hace referencia a la categoría que pertenece el establecimiento.",
      references: {
        model: 'promo_categoria',
        key: 'id'
      }
    },
    id_establecimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave foranea, hace referencia a la categoría que pertenece el establecimiento.",
      references: {
        model: 'promo_establecimiento',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'promo_categoria_promo_establecimiento',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "promo_categoria_promo_establecimiento_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
