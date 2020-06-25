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

router.post('/', (req, res) => {
  const formDta = req.body;
  connection.query('INSERT INTO element SET ?', formDta, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la sauvegarde des données ');
    } else {

      res.json(results);
    }
  });

});

router.delete('/:id', (req, res) => {
  const idElement = req.params.id;
  connection.query('DELETE FROM element WHERE id = ?', [idElement], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression des données");
    } else {

      res.sendStatus(200);
    }
  });
});


router.put('/:id', (req, res) => {

  const idElement = req.params.id;
  const formData = req.body;

  connection.query('UPDATE element SET ? WHERE id = ?', [formData, idElement], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la modification des données");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;