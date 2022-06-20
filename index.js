const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'Servidor rodando na AWS com NODE e EXPRESS com PM2, finalmente hahaha ... updated!'});
})

app.get('/atualizou', (request, response) => {
    return response.json({message: 'Updated'});
})

app.get('/teste', (request, response) => {
    const dataa = new Date();
    return response.json(dataa);
})

app.listen(3333);