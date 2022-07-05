const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'.magenta
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Imprime la tabla en consola'.green
})
.option('help', {
    type: 'boolean',
    default: false,
    describe: 'Imprime ayuda sobre los comandos'.yellow
})
.option('hasta', {
    alias: 'h',
    type: 'number',
    demandOption: false,
    default: 10,
    describe: 'Es el numero hasta donde llega la tabla o su limite'.blue
})
.alias('v', 'version')
.check((argv, options) =>  {
    if ( isNaN( argv.b ) ) {
        throw `La base tiene que ser un número`.red
    }
    return true;
})
.argv


module.exports = argv;