let database = require('../TrabajoPractico-NelsonBarrios/database');
module.exports = controller = {
    index:(req,res)=>{
        res.writeHead(200,{'Content-Type':'text/plane ; charset = utf-8'});
        res.write('==========================================================================================================================================\n\n\n\n Conocenos. \n\n\n\n==========================================================================================================================================\n\n\n\n Nuestros autos son: \n ------------------------\n\n\n==========================================================================================================================================\n\n')
        database.forEach(sucursales=>{
            sucursales.autos.forEach(autos=>{
                res.write('\n\n=============   > '+autos.marca+'\n\n=============   > '+autos.modelo+'\n\n=============   > '+autos.anio+'\n\n=============   > '+autos.color+'\n\n')
            });
            
        });
        res.end()
    },
    marca:(req,res)=>{
        res.writeHead(200,{'Content-Type':'text/plane ; charset = utf-8'});
        let id = req.params.marca;
        database.forEach(sucursales=>{
            sucursales.autos.forEach(autosObjetos=>{
                if(id.toLowerCase() == autosObjetos.marca.toLowerCase()){
                    res.write('\n\n=============   > '+autosObjetos.marca+'\n\n=============   > '+autosObjetos.modelo+'\n\n=============   > '+autosObjetos.anio+'\n\n=============   > '+autosObjetos.color+'\n\n')
                }
            })
        })
        res.end('No encontramos ese auto.')
    },
    dato:(req,res)=>{
        res.writeHead(200,{'Content-Type':'text/plane ; charset = utf-8'});
        let idM = req.params.marca
        let id = req.params.dato;
        database.forEach(sucursales=>{
            sucursales.autos.forEach(autosObjetos=>{
                if(idM.toLowerCase()== autosObjetos.marca.toLowerCase()){
                    if(isNaN(Number(id))){
                        if(id.toLowerCase()== autosObjetos.color){
                            res.write('\n\n=============   > '+autosObjetos.marca+'\n\n=============   > '+autosObjetos.modelo+'\n\n=============   > '+autosObjetos.anio+'\n\n=============   > '+autosObjetos.color+'\n\n')
                        }
                    }else{
                        res.write('\n\n=============   > '+autosObjetos.marca+'\n\n=============   > '+autosObjetos.modelo+'\n\n=============   > '+autosObjetos.anio+'\n\n=============   > '+autosObjetos.color+'\n\n')
                    }
                }
            })
        })
        res.end()
    }
}