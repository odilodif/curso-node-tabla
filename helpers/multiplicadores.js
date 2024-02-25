const fs = require('node:fs');
const colors = require('colors/safe');

const createfs = ( base = 5, listar=false, limit=1) =>{      
    return  new Promise( (resolve, reject) => {      
    try {
        if (listar) {
            console.log('===================');
            console.log('TABLA DEL', base );
            console.log('===================')
            let salida = '';
        
            for (let i = 1; i <= limit; i++) {
                    //console.log(cinco, '*' , i,  ' = ', (cinco * i))
                    salida +=`${base} ${colors.green('x')} ${i} = ${base * i}\n`;
                }   
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);        
            console.log(`tabla-${base}.txt`)     
            console.log(salida);
        }
        
        resolve(`tabla-${base}.txt`)
    } catch (error) {
        reject(`Hubo el siguiente error: ${error}`)
    }    

    })   
}

module.exports = {
    createfs: createfs
}