let database = require('../database');
module.exports = controller = {
    index:function(req,res){
        res.writeHead(200,{'Content-Type':'text/plane ; charset = utf-8'})
        res.write('==========================================================================================================================================\n\n\n\n Conocenos. \n\n\n\n==========================================================================================================================================\n\n\n\n Nuestras Sucursales son: \n ------------------------\n\n\n==========================================================================================================================================\n\n')
    database.forEach(concesionaria=>
        {
            res.write('\n\n=============   > '+ concesionaria.sucursal+'\n                  ------------\n')
            res.write('=============   > '+ concesionaria.direccion+'\n                  ---------------------------------------------------------------\n')
            res.write('=============   > '+ concesionaria.telefono+'\n                  ---------------\n')
        })
        res.end()
    },
    sucursal:(req,res)=>{
        let id = req.params.sucursal;
        res.writeHead(200,{'Content-Type':'text/plane ; charset = utf-8'});
        database.forEach(concesionaria=>{
            if(concesionaria.sucursal.toLowerCase() == id.toLowerCase()){
            res.write('\n\n=============   > '+ concesionaria.sucursal+'\n                  ------------\n')
            res.write('=============   > '+ concesionaria.direccion+'\n                  ---------------------------------------------------------------\n')
            res.write('=============   > '+ concesionaria.telefono+'\n                  ---------------\n')
                concesionaria.autos.forEach(auto=>{
                res.write('\n\n=============   > '+ auto.marca+'\n                  ------------\n')
                res.write('=============   > '+ auto.modelo+'\n                  ---------------------------------------------------------------\n')
                res.write('=============   > '+ auto.anio+'\n                  ---------------\n')
                })
            res.write('El total de autos en nuestras sucursales es: ' + concesionaria.autos.length)}
        })
        res.end('error 404, pagina no encontrada')
    }
}
