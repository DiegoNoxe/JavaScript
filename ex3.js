const num = -1;

function verificaNumero(num) {
   if(num === 0)
   {
    return 'Zero';
   }
    if(num > 0)
    {
        return 'Positivo';
    }
    return 'Negativo';
}

const retorno = verificaNumero(num);
console.log('O número é:', retorno);