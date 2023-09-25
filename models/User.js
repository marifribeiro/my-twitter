const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const User = db.define('User', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    require: true,
    primaryKey: true,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

module.exports = User