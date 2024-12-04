//Leia 10 valores reais e calcule seu somatório utilizando a instrução while

let valor;
let guardarValor = 0; 
let i = 0;
while(i <= 10)
{
    valor = Number(prompt('Digite um número para somar:'));
    i++;
    guardarValor+=valor;
}

console.log(`O valor total é: ${guardarValor}`);