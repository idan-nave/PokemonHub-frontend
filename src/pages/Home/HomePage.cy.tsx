import { HomePage } from '@/pages/Home/HomePage';
import { PokemonType } from '@/types/pokemonType';
import pageStyles from '@/pages/Home/HomePage.module.css'
import listStyles from '@/components/PokemonList/PokemonList.module.css'
import errorStyles from '@/components/ErrorBox/ErrorBox.module.css'

const mockedPokemons: PokemonType[] = [
    { pokedex: 1, name: 'Bulbasaur' },
    { pokedex: 2, name: 'Ivysaur' }
]

describe('HomePage OK-Fetch Component Test', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:8080/pokemons', { body: mockedPokemons }).as('getPokemons');
        cy.mount(<HomePage />);
        cy.wait('@getPokemons');
    });

    it('render PokemonList on Left of HomePage with 20% width', () => {
        cy.get(`div.${pageStyles.container_main}`).as('page');
        cy.get(`div.${pageStyles.container_list}`).as('list');

        cy.get('@page').should('have.css', 'display', 'flex');
        cy.get('@page').should('have.css', 'flex-direction', 'row');
        cy.get('@page').children().first().should('have.class', pageStyles.container_list);
        cy.window().then((win) => {
            const expectedWidth = 0.2 * win.innerWidth + 'px';
            cy.get('@list')
                .should('have.css', 'width', expectedWidth)
        });
    });

    it('render PokemonList with 2 pokemons', () => {
        cy.get(`ul.${listStyles.list} li.${listStyles.item}`).should('have.length', mockedPokemons.length);
        cy.get(`ul.${listStyles.list} li.${listStyles.item}`).first().should('contain', '#1 - Bulbasaur');
        cy.get(`ul.${listStyles.list} li.${listStyles.item}`).eq(1).should('contain', '#2 - Ivysaur');
    });
})

describe('HomePage No-Entries Component Test', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:8080/pokemons', { body: [] }).as('getNoPokemons');
        cy.mount(<HomePage />);
        cy.wait('@getNoPokemons');
    });

    it('render notification instead of empty list', () => {
        cy.get(`ul.${listStyles.list} li.${listStyles.notification}`).should('have.length', 1);
    });
})

describe('HomePage FAIL-Fetch Component Test', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:8080/pokemons', {
            statusCode: 500, body: { message: 'Server Error' },
        }).as('getPokemons');
        cy.mount(<HomePage />);
        cy.wait('@getPokemons');
    });

    it('render Error Box', () => {
        cy.get(`ul.${errorStyles.box} li.${errorStyles.item}`).should('have.length', 1);
        cy.get(`ul.${errorStyles.box} li.${errorStyles.item}`).first().should('contain', 'Server error: 500');
    });
})

describe('HomePage Loading & Lazy Fetch Prevention Test', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:8080/pokemons', { body: mockedPokemons }).as('getPokemons');
        cy.mount(<HomePage />);
    });

    it('dismount loader after fetch', () => {
        cy.get(`div.${listStyles.container_loader}`).as('loader').should('exist');
        cy.wait('@getPokemons');
        cy.get('@loader').should('not.exist');
    });

    it('halt fetch if PokemonList dismounts', () => {
        cy.get(`div.${pageStyles.container_list}`).as('list');
        cy.wait(1000);
        cy.mount(<div>Navigation Simulation by foreign mount before fech done</div>);
        cy.get('@list').should('not.exist');
    });
})