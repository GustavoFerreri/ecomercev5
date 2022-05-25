const { Router } = require ('express');
const router = Router();
const services = require ('./../controllers/tasks.controller')

router.get('/', (req, res) =>
    services
    .list()
    .then(response => res.json(response))
    .catch(e=> res.json({e})));

router.get('/:id', (req, res) =>
    services
    .list({id: req.params.id})
    .then(response => res.json(response))
    .catch(e=> res.json({e})));

router.post('/', (req, res) =>{
    const newProduct = ({title, price, img, decription} = req.body);
    return services
    .create(newProduct)
    .then(response => res.json(response))
    .catch(e=> res.json({e}));
})

router.put('/:id', (req, res) =>{
    const updateProduct = ({title, price, img, decription} = req.body);
    return services
    .update(req.params.id, updateProduct)
    .then(response => res.json(response))
    .catch(e=> res.json({e}));
})

router.delete('/:id', (req, res) =>
    services
    .destroy({id: req.params.id})
    .then(response => res.json(response))
    .catch(e=> res.json({e})));

module.exports = router;