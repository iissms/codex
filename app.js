require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const db = require('./models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/api', routes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  const Sequelize = db.Sequelize;
  const isSequelizeError = err instanceof Sequelize.ValidationError ||
    err instanceof Sequelize.ForeignKeyConstraintError ||
    err instanceof Sequelize.UniqueConstraintError;
  const status = err.status || (isSequelizeError ? 400 : 500);

  const response = {
    message: isSequelizeError ? 'Validation failed' : err.message
  };

  if (isSequelizeError) {
    response.details = err.errors.map(e => e.message);
  }

  if (process.env.NODE_ENV !== 'production' && err.stack) {
    response.stack = err.stack;
  }

  console.error(err);
  res.status(status).json(response);
});

const PORT = process.env.PORT || 3000;

db.sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to sync db:', err);
  });

module.exports = app;
