let express = require('express');
let sucursales = express.Router();
let sucursalesController = require('../controllers/sucursalesController');

sucursales.get('/', sucursalesController.index);
sucursales.get('/:sucursal', sucursalesController.sucursal);
module.exports = sucursales;