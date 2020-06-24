const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require('./routes/index.routes');
const authRouter = require('./routes/auth/auth')

app.use('/api', router);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/auth', authRouter);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// let server = app.listen(process.env.PORT || 5000, function () {
//     console.log('Listening on port ' + server.address().port);
// });

module.exports = app;