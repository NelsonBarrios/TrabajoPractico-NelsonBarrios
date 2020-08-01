let express = require('express');
let marcas = express.Router();
let marcasController = require('../controllers/marcasController');

marcas.get('/', marcasController.index);
marcas.get('/:marca', marcasController.marca);

module.exports = marcas;