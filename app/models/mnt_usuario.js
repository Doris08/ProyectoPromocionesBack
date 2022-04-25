const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mnt_usuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "mnt_usuario_email_key"
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_login: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_suspended: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    token_valid_after: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    two_factor_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mnt_usuario',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "mnt_usuario_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "mnt_usuario_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
