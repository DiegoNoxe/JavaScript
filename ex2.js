//Faça um programa que leia três números e exiba o maior entre eles.

const num1 = 2;
const num2 = 3;
const num3 = 4;

function encontraMaiorNumero(num1, num2, num3) {
   let maior = num1;
   if(num2 > maior)
   {
    maior = num2;
   }
   if(num3 > maior)
   {
    maior = num3;
   }
   return maior;
}
const maior = encontraMaiorNumero(num1,num2,num3);
console.log('O maior número é: ', maior);