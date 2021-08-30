const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 1000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controllers/productController')(app);
// ROUTES
app.get('/products', (req, res) => res.send('API de Produtos'));

app.listen(port, () => console.log(`API de Produtos conectado na porta ${port}`));