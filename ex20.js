//Escrever uma função recursiva int soma(int n), que retorna a soma dos n primeiros números inteiros positivos.

const n = 5;

function recursiva(n)
{
    if(n == 0)
    {
        return 0;
    }
    if(n % 2 == 0)
    {
    return n + recursiva(n-1);
    }
}


console.log(recursiva(n));
