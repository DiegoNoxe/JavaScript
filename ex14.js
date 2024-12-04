//Faça um programa que sepera os seguintes numeros em duas listas distintas: 1, 4, 2, 3, 10, 11, 20. Faça uma lista com os que estão na ordem correta e outro na ordem incorreta. 

let vetorNum = [1, 4, 2, 3, 10, 11, 20];
let vetorOrd = [];
let vetorDesordenado = [];

for (let i = 0; i <= vetorNum.length - 1; i++) {
    if (vetorNum[i] <= vetorNum[i + 1]) {
        vetorOrd.push(vetorNum[i]);
    } else {
        vetorDesordenado.push(vetorNum[i]);
    }
}

// Adiciona o último elemento à lista correta
vetorOrd.push(vetorNum[vetorNum.length - 1]);

console.log('Ordenados:', vetorOrd);
console.log('Desordenados:', vetorDesordenado);
