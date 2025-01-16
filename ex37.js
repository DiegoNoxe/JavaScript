/*

Crie um programa que exiba no console as mensagens abaixo com os seguintes atrasos:

"Iniciando o programa..." imediatamente.
"Carregando..." após 3 segundos.
"Bem-vindo!" após 5 segundos.

*/

console.log('Iniciando o programa...');

setTimeout(function()
{
   console.log('Carregando...');
}, 3000);


setTimeout(function()
{
   console.log('Bem-vindo!');
}, 5000);