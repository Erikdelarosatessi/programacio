const { llegeixNumero } = require('./teclat.js');
const minuts = llegeixNumero('Minuts: ');
const hores = Math.floor(minuts / 60);
const minutsRestants = minuts % 60;
console.log(`${minuts} minuts són ${hores} h i ${minutsRestants} min`);
