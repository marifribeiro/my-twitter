const express = require("express");

const app = express();

const conn = require("./db/conn");

// Routes
const AccountRoutes = require("./routes/AccountRoutes");
const TweetController = require("./controllers/TweetController");

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

// Routes
app.use("/account", AccountRoutes);
app.get("/", TweetController.getTimeline);

conn.sync({ force: true })
	.then(() => app.listen(5000))
	.catch((err) => console.log(`Erro ao iniciar a aplicação: ${err}`));