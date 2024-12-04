//Faça uma função que verifique a quantidade de vogais em uma array.

let palavra = ['p', 'a','l', 'a', 'v', 'r', 'a'];

function vogais (palavra)
{
    let qtd = 0;
    for(let i = 0; i<palavra.length;i++)
    {
        if(palavra[i] == "a" || palavra[i] == 'e' || palavra[i] == 'i' || palavra[i] == 'o' || palavra[i] == 'u')
        {
            qtd++;
        }
    }
   return qtd;
}

console.log(vogais(palavra));