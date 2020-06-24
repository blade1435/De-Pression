const router = require('express').Router();
const connection = require('../dbConnection');


router.get('/', (req, res) => {

  connection.query('SELECT * from element', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données ');
    } else {

      res.json(results);
    }
  });
});

module.exports = router;