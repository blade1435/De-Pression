const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const multer = require('multer');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('public'));

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

//stockage de fichiers

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        // cb(null, Date.now() + '-' + file.originalname);
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage }).single('file');

// let server = app.listen(process.env.PORT || 5000, function () {
//     console.log('Listening on port ' + server.address().port);
// });

module.exports = app;