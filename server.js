const path = require('path');
const express = require('express');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.locals.format_date = date => {
  let minutes = new Date(date).getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  };

  return `${new Date(date).getHours()}:${minutes} on ${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
    date
  ).getFullYear()}`;
}

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('App listening on PORT ' + PORT));
});
