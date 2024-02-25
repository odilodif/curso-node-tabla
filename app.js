const { createfs } = require('./helpers/multiplicadores');
const argv = require('./config/yargs')
require('colors');
console.clear();


/*comentario
  definicion de la funcion
*/
const createFielSystem = async (base, list, limit) =>{
    try {
        const obj = await createfs(base, list,limit);
        return ` ${obj} creado`; 
    } catch (error) {
        throw error;
    }
    
} 


/* Se realizo antes esto para pasar argumentos en linea de comandos ej: node app.js  --base=9 

const [ , ,arg3='base=5'] = process.argv            //base por default 5
const [ , base='6'] = arg3.split('=');              //base por default 6        
console.log(base);*/


/* comentario
    consultar argv por consola de node app.js -b 6
*/
console.log(process.argv)
console.log(argv)
//console.log(argv.base)
//const base= 3;


/*comentario
  llamada de la funcion creteFileSuystem
*/
createFielSystem(argv.b,argv.l,argv.m)
    .then(msg => console.log(msg.rainbow))
    .catch(msg => console.log(msg));

