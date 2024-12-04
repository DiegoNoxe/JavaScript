/*

Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.

*/

const age = Number(prompt('How old are you?'));
function ageUser(age)
{
    if(age >= 18)
    {
        return 'You are adult!';
    }
    return 'You are not adult';
}

alert(ageUser(age));