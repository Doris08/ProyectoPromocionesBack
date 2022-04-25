const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mnt_metodo_autenticacion_usuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mnt_usuario',
        key: 'id'
      }
    },
    id_metodo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mnt_metodo_autenticacion',
        key: 'id'
      }
    },
    secret_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_primary: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    temporal_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mnt_metodo_autenticacion_usuario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mnt_metodo_autenticacion_usuario_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
