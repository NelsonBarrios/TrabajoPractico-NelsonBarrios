let fs =require('fs')
module.exports=database = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))
