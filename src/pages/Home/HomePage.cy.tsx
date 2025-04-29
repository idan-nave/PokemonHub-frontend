// ideas for testable stuff:
// loader
// error box
// num of data entries is valid
// css/layout in effect
// fetch is disregarded if component dismounts

import { PokemonList } from '@/components/PokemonList/PokemonList';
import { PokemonType } from '@/types/pokemonType';

const mockedPokemons: PokemonType[] = [
    { pokedex: 1, name: 'Bulbasaur' },
    { pokedex: 2, name: 'Ivysaur' }
]

describe('HomePage/PokemonList Layout Test', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:8080/pokemons', { body: mockedPokemons }).as('getPokemons');
        cy.mount(<PokemonList/>);
        cy.wait('@getPokemons');
    });

    it('render PokemonList with 2 pokemons on Left of HomePage', () => {
        cy.get('ul.list li.item').should('have.length', mockedPokemons.length);
        cy.get('ul.list li.item').first().should('contain', '#1 - Bulbasaur');
        cy.get('ul.list li.item').first().should('contain', '#2 - Ivysaur');
    });
})