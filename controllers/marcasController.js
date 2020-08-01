let database = require('../database');
const marcas = require('../routes/marcas');
module.exports = controller = {
    index:function(req,res){
        res.writeHead(200,{'Content-Type':'text/plane ; charset = utf-8'});
        res.write('\n\n Nuestros Autos son: \n\n')
        database.forEach(sucursales=>{
            sucursales.autos.forEach(auto=>{
                let marcas = []
                if(marcas.indexOf(auto)==-1){marcas.push(auto.marca)}
                res.write('\n=============   > '+marcas+'\n')
            })
        })
        res.end()
    },
    marca:(req,res)=>{
        res.writeHead(200,{'Content-Type':'text/plane ; charset = utf-8'});
        let id = req.params.marca;
        database.forEach(sucursales=>{
            sucursales.autos.forEach(autosObjetos=>{
                if(id.toLowerCase() == autosObjetos.marca.toLowerCase()){
                    res.write('\n\n=============   > '+autosObjetos.marca+'\n\n=============   > '+autosObjetos.modelo+'\n\n=============   > '+autosObjetos.anio+'\n\n')
                }
            })
        })
        res.end('No encontramos la marca.')
    }
}