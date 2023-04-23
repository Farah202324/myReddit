const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./routes');

const app = express();

app.set(8000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());
app.use(express.static(join(__dirname, '..', 'client', 'pages', 'public')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'pages', 'public', 'html', 'home.html'));
});
app.get('/login', (req, res) => {
  res.redirect('/public/login/index.html');
});

app.get('/signup', (req, res) => {
  res.redirect('/public/signup/index.html');
});

app.use(router);

app.use((req, res) => {
  res.status(404).sendFile(join(__dirname, '..', 'client', 'pages', 'errors', 'error404.html'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).sendFile(join(__dirname, '..', 'client', 'pages', 'errors', 'error500.html'));
});

module.exports = app;
