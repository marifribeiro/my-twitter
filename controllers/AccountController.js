const Account = require("../models/Account");

module.exports = class AccountController {
	static async getUser(req, res) {
		res.status(200).json({ result: "Dados da conta do usuário" });
	}
};