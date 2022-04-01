//! Algoritmo Pokedex
/*
1) Quando clicar no Pokémon da listagem temos que esconder o cartão do Pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
    Para isso, precisamos trabalhar com:
    * Listagem e o cartão do Pokemon

Duas variáveis para trabalhar com os elementos da tela. 

Precisamos trabalhar com o evento de clique feito pelo usuário na listagem de pokemons

- Remover a classe aberto só do cartão que esta aberto
- Ao clicar um Pokemon da listagem, pegar o ID do Pokémon para saber qual cartão mostrar 
- remover a classe ativa que mostra o Pokémon selecionado
- Adicionar a classe ativo no item da lista selecionado
*/

const listagem_selecao_pokemon = document.querySelectorAll(".pokemon");
const pokemons_card = document.querySelectorAll(".cartao-pokemon");

//*Criando um loop que pegue todos os <li> de cada Pokémon do HTML
listagem_selecao_pokemon.forEach((pokemon) => {
  console.log(pokemon);

  //*Precisamos trabalhar com o evento de clique feito pelo usuário na listagem de pokemons
  pokemon.addEventListener("click", () => {
    //- Remover a classe aberto so do cartão que esta aberto
    const cartao_pokemon_aberto = document.querySelector(".aberto");
    console.log(cartao_pokemon_aberto.classList);
    cartao_pokemon_aberto.classList.remove("aberto");

    //-Pegando o ID de cada pokemon
    const id_Pokemon_selecionado = pokemon.attributes.id.value;
    console.log(id_Pokemon_selecionado);

    const id_cartao_pokemon_para_abrir = "cartao-" + id_Pokemon_selecionado;

    const cartao_pokemon_para_abrir = document.getElementById(id_cartao_pokemon_para_abrir);
    console.log(cartao_pokemon_para_abrir);

    //- trocando para aberto
    cartao_pokemon_para_abrir.classList.add("aberto");

    //- remover a classe ativa que mostra o Pokémon selecionado
    const pokemon_ativo_listagem = document.querySelector('.ativo')
    pokemon_ativo_listagem.classList.remove('ativo')

    //- Adicionar a classe ativo no item da lista selecionado
    const pokemon_selecionado_listagem = document.getElementById(id_Pokemon_selecionado)
    pokemon_selecionado_listagem.classList.add('ativo')
    
  });
});
