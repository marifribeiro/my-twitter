const Tweet = require("../models/Tweet");

module.exports = class TweetController {
	static async getTimeline(req, res) {
		res.status(200).json({ result: "Todos os tweets" });
	}
};