let express = require('express');
let home = express.Router();
let homeController = require('../controllers/homeController');

home.get('/', homeController.index);
module.exports = home;