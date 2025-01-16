/*

Implemente um simulador de banco onde o usuário pode criar uma conta com um saldo inicial e ter acesso a funções para verificar o saldo, depositar dinheiro, sacar dinheiro (com validação de saldo suficiente) e encerrar a sessão. 

*/

let nome = prompt("Por favor, Insira o seu nome: ");
let saldo = Number(prompt("Digite o seu saldo inicial: "));
let acao;
console.log('\n');
while(acao != -1)
{

    console.log("Opções: \nSacar dinheiro (1)\ndepositar dinheiro(2)\nMostar Saldo atual(3)\nEncerrar sessão(-1)");
    acao = Number(prompt(" "));
   
    switch(acao)
    {
        case 1:
        acao = Number(prompt("Quanto deseja sacar? "));
        if(acao > saldo)
        {
        console.log("Saldo insuficiente!");
        break;
        }
        saldo-=acao
        break;
        
        case 2:
        acao = Number(prompt("Quanto deseja depositar? "));
        saldo+=acao
        break;
         
        case 3:
        console.log("O seu saldo atual é: " + saldo);
        break;
        
        default:
        console.log('Opção invalida');
    }

}   
