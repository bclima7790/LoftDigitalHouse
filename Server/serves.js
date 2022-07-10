const express = require('express');
const path = require('path');
const server = express();


server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../Public/home.html'));
}) //Subida home na rota "/"

server.listen(3000, () => {
    console.log('Servidor Rodando');
}) //Subida de Servidor