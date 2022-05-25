const { Router } = require ('express');
const router = Router();
const services = require ('./../controllers/tasks.controller')

router.get('/', (req, res) =>
    services.list()
    .then(response => res.json(response))
    .catch(e=> res.json({e})));

module.exports = router;