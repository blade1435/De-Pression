const router = require('express').Router();
const connection = require('../dbConnection');


router.get('/', (req, res) => {

    connection.query('SELECT * from user', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération du contenu de la table element');
      } else {
        res.json(results);
      }
    });
  });

  module.exports = router;