const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'Servidor rodando na AWS com NODE e EXPRESS, finalmente hahaha'});
})

app.get('/atualizou', (request, response) => {
    return response.json({message: 'Updated'});
})

app.get('/teste', (request, response) => {
    const {name, date} = request.body;
    return response.json({name, date});
})

app.listen(3333);