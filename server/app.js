const express = require('express');
const session = require('express-session');
const fileUpload = require('express-fileupload');
require('custom-env').env(process.env.NODE_ENV);
const devEnvironment = process.env.NODE_ENV === 'development';

const app = express();

// Setup fileupload for formdata/multipart
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
  createParentPath: true
}));

// Test database connection
const db = require('./models');
db.sequelize.authenticate()
  .then(() => {
    if (devEnvironment) console.log('Database is connected...'); // eslint-disable-line no-console
  })
  .catch(err => {
    if (devEnvironment) { console.log('DB Error: ' + err); }; // eslint-disable-line no-console
  });

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// @/api/v1 router
app.use('/api/v1', require('./routes'));

// Error handler
app.use(require('./middleware/errorHandler'));

module.exports = app;
