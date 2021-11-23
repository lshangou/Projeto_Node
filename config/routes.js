const express = require('express');

module.exports = function(server) {

  //API Routes

  const router = express.Router();

  server.use('/', router);

  //Registering API methods in router

  const itemService = require('../itens/pessoaService');
  const carroService = require('../itens/carroService');

  itemService.register(router, '/pessoa');
  carroService.register(router, '/carro')

}