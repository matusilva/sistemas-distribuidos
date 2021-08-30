const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');

const User = require('../models/User');

const router = express.Router();

// GERAR TOKEN
function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        // EXPIRAR TOKEN EM 86400 segundos (24hrs)
        expiresIn: 84600,
    })
}

// REGISTRAR USUÁRIO
router.post('/register', async (req, res) => {
    const { email } = req.body;
    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'Usuário já existe' });

        const user = await User.create(req.body);

        // REMOÇÃO DO RETORNO DO PASSWORD AO CADASTRAR
        user.password = undefined;

        return res.send({
            user,
            token: generateToken({ id: user.id }),
        });
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao Registrar' });
    }
});

// AUTENTICAR USUÁRIO
router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return res.status(400).send({ error: 'Usuário não encontrado' });

    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha Inválida'});

    // REMOÇÃO DO RETORNO DO PASSWORD AO LOGAR
    user.password = undefined;

    res.send({
        user,
        token: generateToken({ id: user.id }),
    });
});

module.exports = app => app.use('/auth', router);