const express = require('express')
const exphdbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn')

// Models
const Account = require('./models/Account');
const User = require('./models/User');
const Tweet = require('./models/Tweet');

app.engine('handlebars', exphdbs.engine())
app.set('view engine', 'handlebars')

app.use(
	express.urlencoded({
		extended: true,
	})
)

app.use(express.json)

app.use(
	session({
		name: "session",
		secret: "secret",
		resave: false,
		saveUninitialized: false,
		store: new FileStore({
			lgFn: () => { },
			path: require('path').join(require('os').tmpdir(), 'sessions')
		}),
		cookie: {
			secure: false,
			maxAge: 360000,
			expires: new Date(Date.now() + 360000),
			httpOnly: true,
		}
	})
)

app.use(flash())

app.use((req, res, next) => {
	if (req.session.userid) {
		res.locals.session = req.session
	}

	next();
})

conn.sync({ force: true })
	.then(() => app.listen(3000))
	.catch((err) => console.log(`Erro ao iniciar a aplicação: ${err}`))