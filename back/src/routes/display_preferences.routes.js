const router = require('express').Router();
const connection = require('../dbConnection');

router.get('/', (req, res) => {

  connection.query('SELECT * from display_preferences ', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données ');
    } else {

      res.json(results);
    }
  });
});

router.post('/', (req, res) => {
  const formDta = req.body;
  connection.query('INSERT INTO display_preferences SET ?', formDta, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la sauvegarde des données ');
    } else {

      res.json(results);
    }
  });

});

router.delete('/:id', (req, res) => {
  const idDisplay_preferences = req.params.id;
  connection.query('DELETE FROM display_preferences WHERE id = ?', [idDisplay_preferences], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression des données");
    } else {

      res.sendStatus(200);
    }
  });
});

router.put('/:id', (req, res) => {

  const idDisplay_preferences = req.params.id;
  const formData = req.body;

  connection.query('UPDATE display_preferences SET ? WHERE id = ?', [formData, idDisplay_preferences], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la modification des données");
    } else {
      res.sendStatus(200);
    }
  });
});
module.exports = router;