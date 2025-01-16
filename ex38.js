/*

Escreva um programa que peça ao usuário para inserir números. O programa deve parar de pedir números quando o usuário inserir um número negativo. Exiba a soma de todos os números inseridos (sem incluir o negativo).

*/

let num;
let contador = 0;

while(true)
{
    num = Number(prompt("Digite um número positivo: "));
    if(num < 0) break;
    contador+=num;
};

console.log(`A soma foi: ${contador}`);