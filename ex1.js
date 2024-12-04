//Faça um programa que leia 3 números, some-os e exiba a média entre eles.

const num1 = Number(prompt('Digite o primeiro número'));
const num2 = Number(prompt('Digite o segundo número'));
const num3 = Number(prompt('Digite o terceiro número'));

const soma = num1 + num2 + num3;
const media = soma / 3;

alert('A média entre os três números é: ' + media);