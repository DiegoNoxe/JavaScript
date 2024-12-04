//Anagram

let palavra = "abc";
let final = palavra.length-1;
let result = 0;

for(let i = 0; i < final; i++, final--)
{
    if(palavra[i] != palavra[final])
    {
        result = 1;
    }
}
console.log(result);