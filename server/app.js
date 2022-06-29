const express = require('express');
const session = require('express-session');

const app = express();

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
app.use(require('./middleware/errorMiddleware'));

module.exports = app;
