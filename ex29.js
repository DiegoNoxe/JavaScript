//Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string. Tanto o caractere quanto a string devem ser fornecidos pelo usuário.

let string    = prompt("Digite a palavra: ");
let caractere = prompt("Digite a letra procurada: ");
let cont = 0;

for (let i of string)
{
   if(i == caractere)
   {
    cont++;
   }
}

console.log(cont);