const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 2000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controllers/authController')(app);

// ROUTES
app.get('/users', (req, res) => {
   res.send('API de Usuários')
});

app.listen(port, () => console.log(`API de Usuários conectado na porta ${port}`));