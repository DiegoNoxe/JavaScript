/*
Escreva um loop que conte de 1 a 20, mas pule números divisíveis por 3. Use o comando continue para evitar imprimir os números divisíveis por 3.
*/

let i = 1;
for(i; i <= 20; i++)
    {
        if(i % 3 == 0) continue;
        console.log(i);
    };