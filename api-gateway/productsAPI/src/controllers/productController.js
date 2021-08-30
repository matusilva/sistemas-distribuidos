const express = require('express');
const Procuct = require('../models/Product');

const router = express.Router();

router.post('/create', async (req, res) => {
    try {

        const product = await Procuct.create(req.body);
        res.send(product);

    } catch (err) {
        return res.status(400).send({ error: 'Falha ao criar Produto'});
    }
});

router.get('/list', async (req, res) => {
    const product = await Procuct.find({});
    res.send(product);
});

router.get('/getByIdName', async (req, res) => {
    const { idName } = req.body;
    const product = await Procuct.findOne({ idName });
    res.send(product);
});

router.delete('/', async (req, res) => {
    const { id } = req.body;
    const product = await Procuct.findOneAndRemove({ id: Procuct.id });
    res.send(product);
});

module.exports = app => app.use(router);
