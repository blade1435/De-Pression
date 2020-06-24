const router = require('express').Router();
const elementRouter = require('./element.routes');
const diseaseRouter = require('./disease.routes');
const disease_elementRouter = require('./disease_element.routes');
const display_preferencesRouter = require('./display_preferences.routes');
const userRouter = require('./user.routes');
const type_ressourceRouter = require('./type_ressource.routes');

router.use('/element', elementRouter);
router.use('/disease', diseaseRouter);
router.use('/disease_element', disease_elementRouter);
router.use('/display_preferences', display_preferencesRouter);
router.use('/user', userRouter);
router.use('/type_ressource', type_ressourceRouter);

module.exports = router;
