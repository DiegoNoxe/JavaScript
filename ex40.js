/* 
Implemente um programa que exibe a tabuada de um número fornecido pelo usuário. O programa deve:
*/

let num = Number(prompt("Digite um número: "));
for(let i = 1; i <= 9; i++) {console.log(`${num} * ${i} = ${num*i}\n`)};