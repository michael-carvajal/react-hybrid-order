// src/app.js
const express = require('express');
const cors = require('cors');
const automationRoutes = require('./routes/automation');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/automation', automationRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
