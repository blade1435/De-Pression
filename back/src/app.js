const http = require('http');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const multer = require('multer');
const cors = require('cors');
require('dotenv').config();
const corsOption = {
    origin: process.env.CLIENT_APP_ORIGIN
};
app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require('./routes/index.routes');
const authRouter = require('./routes/auth/auth')

app.use('/api', router);
app.use(morgan('dev'));
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


module.exports = app;