const router = require('express').Router();
const connection = require('../dbConnection');



router.post("/upload", (req, res) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }

        return res.status(200).send(req.file);
    });
});

module.exports = router;