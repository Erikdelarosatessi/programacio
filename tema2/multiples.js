let comptador = 0;

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        comptador++;
    }
}

console.log(`Entre 1 i 30 hi ha ${comptador} múltiples de 3.`);