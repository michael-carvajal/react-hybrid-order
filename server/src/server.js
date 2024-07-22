// src/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const automationRoutes = require(path.join(__dirname, 'routes', 'automation'));

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/automation', automationRoutes);
app.get('/hello', (req, res) => {
  return res.json({ message: "hello world" });
});
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;

