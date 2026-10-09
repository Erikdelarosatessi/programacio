const preu = 10;
const quantitat = 3;
const iva = 21;

const base = preu * quantitat;
const total = base + (base * iva / 100);

console.log(`${quantitat} entrades x ${preu} € = ${base} €`);
console.log(`Amb IVA: ${total} €`);