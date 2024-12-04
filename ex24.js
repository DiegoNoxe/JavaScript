//Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 a 50.

for(let i = 0; i<=50;i++)
{
    if(i % 2 == 0)
    {
        console.log(`${i}² = ${i*i}\n`);
    }
}