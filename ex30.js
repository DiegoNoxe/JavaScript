//Reverse String

let nome = "diego";
let reverse = "";

for(let i = nome.length-1; i>-1;i--)
{
    reverse += nome[i];
}

console.log(reverse);