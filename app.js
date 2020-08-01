const express =require('express');
const app = express();

app.listen('3030', console.log('server running in port 3030'));

const homeRouter = require('./routes/home');
const sucursalesRouter = require('./routes/sucursales')
const marcasRouter = require('./routes/marcas')
const autosRouter = require('./routes/autos')

app.use('/', homeRouter);
app.use('/sucursales', sucursalesRouter);
app.use('/marcas', marcasRouter);
app.use('/autos', autosRouter)