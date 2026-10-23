const { llegeixNumero } = require('./teclat.js');
let suma = 0;
let quantitat = 0;
let numero = llegeixNumero('Número (0 per acabar): ');

while (numero !== 0) {
  suma = suma + numero;
  quantitat = quantitat + 1;
  numero = llegeixNumero('Número (0 per acabar): ');
}

console.log(`Suma: ${suma}`);
console.log(`Números: ${quantitat}`);
if (quantitat === 0) {
  console.log('No has escrit cap número');
} else {
  console.log(`Mitjana: ${suma / quantitat}`);
}
