const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors');

console.clear();



crearArchivo( argv.b, argv.l, argv.h)
    .then( nArch => console.log( `${nArch}`.underline.brightBlue, 'creado\n'.green.italic) )
    .catch( err => console.log( err.red))



 