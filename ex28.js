//Solicite uma palavra ao usuário e conte quantas vogais ela possui.

let palavra = 'aeiossssssu';
let cont = 0;
for(let i = 0; i<=palavra.length;i++)
{
    if(v(palavra, i) == 1)
    {
        cont++;
    }
}

console.log(cont);

function v(palavra, pos)
{
    if(palavra[pos] == 'a' || palavra[pos] == 'e' || palavra[pos] == 'i' || palavra[pos] == 'o' || palavra[pos] == 'u')
    {
        return 1;
    }
    else
    {
        return 0;
    }
}