// faça a Sequência de Fibonacci até 100


let a = 0
let b = 1;
let j = 0;

let count = 0;

while(count < 100)
{
    console.log(a);
    j = a + b;
    a = b;
    b = j;
    count++;
}