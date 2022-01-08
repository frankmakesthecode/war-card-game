const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json());

// api routes
app.use('/players', require('./routes/players'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// static file serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// any other requests with an extension sends 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
