const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const router = require('./routes/index.routes');

app.use('/api', router);

module.exports = app;