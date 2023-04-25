const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { readFile } = require('fs');
const router = require('./routes');

const app = express();

app.set(8000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());
app.use(express.static(join(__dirname, '..', 'client')));

app.get('/login', (req, res) => {
  res.redirect('/client/users/login.html');
  res.send('logged');
});
app.get('/signup', (req, res) => {
  res.redirect('/client/users/login.html');
  res.send('signed');
});
app.use(router);

app.use((req, res) => {
  res.status(404).sendFile(join(__dirname, '..', 'client', 'errors', 'error404.html'));
});
app.use((req, res) => {
  res.status(401).sendFile(join(__dirname, '..', 'client', 'errors', 'error401.html'));
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).sendFile(join(__dirname, '..', 'client', 'errors', 'error500.html'));
});

module.exports = app;
