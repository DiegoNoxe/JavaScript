//Count number of negative values in array

let Array = [1, 2, -5, 2, -1, -10, 20, 100, -100];
let j = 0;

/*

for(let i = 0; i<Array.length;i++)
{
    if(Math.sign(Array[i]) == -1)
    {
        j++;
    }
}

*/

for(let i = 0; i<Array.length;i++)
{
    if(Array[i] < 0)
    {
        j++;
    }
}

console.log(j);  