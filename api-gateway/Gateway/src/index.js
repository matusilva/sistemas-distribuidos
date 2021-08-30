const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();

const port = 3000;
const {
    USERS_API_URL,
    PRODUCTS_API_URL,
} = require('./URLs');

const usersServiceProxy = httpProxy(USERS_API_URL);
const productsServiceProxy = httpProxy(PRODUCTS_API_URL);

// ROUTES
app.get('/', (req, res) => res.send('API Gateway'));

// USERS
app.get('/users', (req, res) => usersServiceProxy(req, res));
app.post('/auth/register', (req, res) => usersServiceProxy(req, res));
app.post('/auth/authenticate', (req, res) => usersServiceProxy(req, res));

// PRODUCTS
app.get('/products', (req, res) => productsServiceProxy(req, res));
app.post('/create', (req, res) => productsServiceProxy(req, res));
app.get('/list', (req, res) => productsServiceProxy(req, res));
app.get('/getByIdName', (req, res) => productsServiceProxy(req, res));
app.delete('/', (req, res) => productsServiceProxy(req, res));

app.listen(port, () => console.log(`API Gateway conectado na porta ${port}`));