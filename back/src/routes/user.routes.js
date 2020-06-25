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
router.post('/', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO user SET ?', formData, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la sauvegarde des données (${err.message}) `);
    } else {

      res.status(201).json(results);
    }
  });
});

router.delete('/:id', (req, res) => {
  const idElement = req.params.id;
  connection.query('DELETE FROM user WHERE id = ?', [idElement], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression des données");
    } else {

      res.sendStatus(200);
    }
  });
});

router.put('/:id', (req, res) => {

  const idUser = req.params.id;
  const formData = req.body;

  connection.query('UPDATE user SET ? WHERE id = ?', [formData, idUser], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la modification des données");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;