const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'Servidor rodando na AWS, finalmente hahaha'});
})

app.listen(3333);