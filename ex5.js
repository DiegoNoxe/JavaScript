/*

Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' se o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.

*/

const dano  = Number(prompt('Dano: '));
const saude = Number(prompt('Saude: '));

function personagemMorreu (dano, saude) {
  if(dano >= saude)
  {
    return 'Matou!';
  }
  return 'Não matou';
}

console.log(personagemMorreu(dano, saude));

