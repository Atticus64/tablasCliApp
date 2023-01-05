const fs = require('fs');
require('colors');
const arrCombi = require('./arrCombinado')

const crearArchivo = async (num = 5, list, hasta = 10) => {

    try {
        let salida = '' 
        let consola = ''
        const num1 =  `${num}`.cyan 
        for (let i = 1; i <= hasta; i++) {
          const num2 = `${i}`.cyan
          const res = `${num * i}\n`.bold.white
          salida += `${num} x ${i} = ${num * i}\n`;
          consola += (`${num1} ${'x'.red} ${num2} ${'='.yellow} ${res}`);
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


