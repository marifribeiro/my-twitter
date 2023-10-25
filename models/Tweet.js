const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Account = require("./Account");

const Tweet = db.define("Tweet", {
	id: {
		type: DataTypes.UUID,
		allowNull: false,
		require: true,
		primaryKey: true,
		unique: true,
	},
	content: {
		type: DataTypes.STRING,
		allowNull: false,
		require: true,
	},
});

Tweet.belongsTo(Account);
Account.hasMany(Tweet);

module.exports = Tweet;