//Palindrome Check: Check if a string is a palindrome.

let str1 = "aabbx";
let str2 = "aabb";

function check (str1, str2)
{
    let tam = str1.length;

    let i = 0, j = 0;

    for(i; i<tam; i++, j++)
    {

    if(str1[i] != str2[j])
    {
        return 0;
    }

    };
return 1;
}

console.log(check(str1, str2));