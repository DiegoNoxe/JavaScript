//Faça uma função que pegue 3 números e verifique o maior entre eles.

const a = 1;
const b = 2;
const c = 4;

function comparando(a, b, c)
{
    let maior = a;
    maior = b > maior ? b : maior;
    maior = c > maior ? c : maior;
    return maior;
}

console.log(comparando(a, b, c));