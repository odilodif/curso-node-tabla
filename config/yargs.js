
const { number, options } = require('yargs');
const yargs = require('yargs');
const argv = require('yargs')
                        .option('b',{
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Toma la base de la tabla de multiplicar'
                        })
                        .option('l',{
                            alias: 'listar',
                            type: 'boolean',
                            demandOption: true,
                            default: false,
                            describe: 'Si es True permite Listar caso contrario solo escribe el archivo con el nombre de la Tabla'
                        })
                        .option('m',{
                            alias: 'limit',
                            type: 'number',
                            demandOption: true,                            
                            describe: 'Limite de veces para la tabla'
                        })
                        .check((argv,options)=>{
                            //console.log('yargs',argv)
                            if (isNaN(argv.b)) {
                                throw 'La base debe ser un numero'
                            }
                            return true
                            
                        })
                        .argv;

module.exports = argv;