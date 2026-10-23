const { llegeixNumero } = require('./teclat.js');
let total = 0;
let x = llegeixNumero('> ');
while (x !== 0) {
  total = total + x;
  x = llegeixNumero('> ');
}
console.log(total);
