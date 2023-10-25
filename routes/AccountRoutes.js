const express = require("express");
const router = express.Router();
const AccountController = require("../controllers/AccountController");

router.get("/:handle", AccountController.getUser);

module.exports = router;