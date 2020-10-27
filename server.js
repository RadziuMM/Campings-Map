const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const routes = require('./routes');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(`${__dirname}/dist`));
app.get('/.*/', (_req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: 'nowy marker',
  resave: false,
  saveUninitialized: true,
  cookie: {},
}));

app.use(flash());
app.use('/', routes);

app.listen(port);
console.log('Server started...');

module.exports = app;
