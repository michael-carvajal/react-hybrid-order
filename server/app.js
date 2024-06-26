// src/app.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const automationRoutes = require('./routes/automation');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/automation', automationRoutes);
app.get('/hello', (req, res) => {
  return res.json({message: "hellow world"})
})
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
