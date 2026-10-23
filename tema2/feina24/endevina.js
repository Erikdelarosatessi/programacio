const { llegeixNumero } = require('./teclat.js');
const secret = 37;
let intents = 0;
let intent = llegeixNumero('Endevina el número (1-100): ');
intents = intents + 1;

while (intent !== secret) {
  if (intent < secret) {
    console.log('Més gran');
  } else {
    console.log('Més petit');
  }
  intent = llegeixNumero('Torna-hi: ');
  intents = intents + 1;
}

console.log(`Encertat en ${intents} intents!`);
