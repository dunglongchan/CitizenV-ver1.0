const express = require('express')
const app = express()
const port = 3000
const morgan  =  require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')
const route = require('./routes')
const db = require('./config/db')
const passport = require('passport');
const session = require('express-session')
const flash = require('connect-flash');



app.use(morgan('combined'))

app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

db.connect()


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))

require('./config/db/passport');
app.use(session({
    secret: 'adsa897adsa98bs',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 180 * 60 * 1000 }
}))
app.use(flash());
app.use(passport.initialize())
app.use(passport.session());

app.use(express.json())
route(app)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})