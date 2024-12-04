///Crie uma função que conte quantas vezes um caractere específico aparece em uma string fornecida.

let string = 'Diego Nascimento';
function contaCaracter(string)
{
    let j, i = 0;
    for(i; i<string.length;i++)
    {
        if('o' === string[i])
            {
                j++;
            };
    }
    return j;
}
console.log(contaCaracter(string));
 