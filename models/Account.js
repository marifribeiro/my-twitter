const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const User = require('./User');

const Account = db.define('Account', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    require: true,
    primaryKey: true,
    unique: true,
  },
  handle: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
    unique: true,
  },
});

Account.belongsTo(User);
User.hasMany(Account);

module.exports = Account