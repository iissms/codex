const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

db.sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Unable to sync db:', err);
  });

module.exports = app;
