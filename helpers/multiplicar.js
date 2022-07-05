const fs = require('fs');
require('colors');
const arrCombi = require('./arrCombinado')

const crearArchivo = async (num = 5, list, hasta = 10) => {

    try {
        let salida = '' 
        let consola = ''
        for (let i = 1; i <= hasta; i++) {
            salida += (`${num} ` + 'x' + ` ${i} ` + '=' + ` ${num * i}\n`);
            consola += (`${num} `.cyan + 'x'.red + ` ${i} `.cyan + '='.yellow + ` ${num * i}\n`.bold.white);
        }
        
        
        if ( list ){
            console.log(arrCombi);
            console.log('  Tabla del:'.bold.white, `${num}`.bold.blue);
            console.log(arrCombi);
            console.log(consola)
        } 
    
    
        fs.writeFileSync(`./salida/tabla-${num}.txt`, salida);
    
    
        // console.log(`tabla-${num}.txt creado!`);
        return `tabla-${num}.txt`
    } catch (err) {
        throw err
    }

   
}


module.exports = {
    crearArchivo
}


