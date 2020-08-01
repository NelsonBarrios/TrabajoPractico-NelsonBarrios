/**
 * requerí todos los archivos
 */
let express = require('express');
let autos = express.Router();
let autosController = require('../../controllers/autosController');
/**
 * usé método Get() para enviar todas las rutas recibidas de app.js para enviarlas al archivo autosController.js además invoqué a la estructura exportada y les pedí sus propiedades según la ruta solicitada.
 */
autos.get('/', autosController.index);
autos.get('/:marca', autosController.marca);
autos.get('/:marca/:dato?', autosController.dato);
module.exports = autos;