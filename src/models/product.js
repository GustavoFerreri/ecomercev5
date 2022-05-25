const { Router } = require ('express');
const router = Router();
const { list } = require ('./../controllers/tasks.controller')

router.get('/', list);

module.exports = router;