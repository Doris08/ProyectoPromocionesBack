const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo_promociones', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave primaria",
      primaryKey: true
    },
    id_tipo_promocion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Llave foranea,hace referencia al tipo de promocion",
      references: {
        model: 'ctl_tipo_promocion',
        key: 'id'
      }
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "indica la fecha de incio correspondiente a la promocion a registrar."
    },
    fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "indica la fecha de finalizacion correspondiente a la promocion a registrar."
    },
    codigo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "campo que almacena el codigo de la promocion a registrar"
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "Indica el estado del registro en la base de datos: true=habilitado, false=deshabilitado."
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Indica el nombre de la promocion a registrar."
    },
    id_establecimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'promo_establecimiento',
        key: 'id'
      }
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Indica la descripcion de la promocion, este campo nace del contenido de un campo de texto enriquecido."
    }
  }, {
    sequelize,
    tableName: 'promo_promociones',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "promo_promocion_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
