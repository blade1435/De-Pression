const express = require("express");
const connection = require("../../dbConnection");
const router = express.Router();


// router.post("/", function (req, res, next) {
//     const formData = req.body;
//     connection.query("INSERT INTO user SET ?", formData, (err, results) => {
//         if (err) {
//             res.status(500).send({ flash: err.message });
//         } else {
//             res.status(200).send({ flash: "User has been signed up !" });
//         }
//     });
// });



module.exports = router;