/*
Faça um programa que leia um número e verifique se ele é par ou ímpar. Exiba uma mensagem indicando o resultado.

*/

const num = 3;

function verificaParOuImpar(num) 
{
    return num % 2 === 0 ? 'Número é par' : 'Número é impar';
}
 
console.log(verificaParOuImpar(num));