let database = require('../database');
module.exports = controller = {
    index:function(req,res){
        res.writeHead(200,{'Content-Type':'text/plane ; charset = utf-8'})
        res.write('=============================================================================================================================================\n\n\n\n Bienvenidos a nuestro sitio. \n\n\n\n=============================================================================================================================================\n\n\n\n Nuestras Sucursales son: \n ------------------------\n\n\n=============================================================================================================================================\n\n\n\n')
        database.forEach(sucursales=>{
            res.write('=============   > '+ sucursales.sucursal+'\n                  ------------\n')
        })
        res.end()
    }
}