//Escreva uma função que conte o número de vogais em uma string fornecida.

let nomes = []; 
nomes.push(prompt('Digite o seu nome')); 

function contVogal(nomes)
{
    let j = 0;
    let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    for(let i = 0; i < nomes.length; i ++)
        {
        for(let p = 0; p < vogais.length;p++)
            if(nomes[i] === vogais[p])
            {
             j++;
             break
            }
        };
        return j;
}

let numeroDeVogais = contVogal(nomes[0]);
console.log("Número de vogais: " + numeroDeVogais);