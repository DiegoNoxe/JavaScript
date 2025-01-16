//How many times does a character occur?

let palavra = prompt("Digite a palavra: ");
let j = 0;
for(let i = 0; i<palavra.length;i++)
{
    if(palavra[i] == 'a')
    {
        j++;
    }
}

console.log(j);