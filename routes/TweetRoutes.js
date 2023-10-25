const express = require("express");
const router = express.Router();
const TweetController = require("../controllers/TweetController");

router.get("/", TweetController.getTimeline);

module.exports = router;