const express = require('express');

const app = express();
//GET, PUT, POST, DELETE
app.get('/',(req, res) => {
    return res.json({message: 'get'});
});
//req.query = Acessar query params (para filtros)
app.get('/users',(req, res) => {
    return res.json({idade: req.query.idade});
});
//req.params = Acessar route params (para edição, delete)
app.put('/users/:id',(req, res) => {
    return res.json({id: req.params.id});
});
//req.body = Acessar corpo da requesição (para criação, edição)
app.use(express.json());
app.post('/users', (req, res) => {
    return res.json(req.body);
});

app.listen(2222);