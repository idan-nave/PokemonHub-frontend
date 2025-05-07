import { HomePage } from '@/pages/Home/HomePage'
import { PokemonType } from '@/types/pokemonType'
import { PokemonDetailsType } from '@/types/pokemonDetailsType'
import pageStyles from '@/pages/Home/HomePage.module.css'
import listStyles from '@/components/PokemonList/PokemonList.module.css'
import detailsStyles from '@/components/PokedexDetails/PokedexDetails.module.css'
import errorStyles from '@/components/ErrorBox/ErrorBox.module.css'

const mockedPokemons: PokemonType[] = [
    { pokedex: 1, name: 'Bulbasaur' },
    { pokedex: 2, name: 'Ivysaur' },
]

const mockedDetails: PokemonDetailsType = {
    "pokedex": 1,
    "name": "Bulbasaurrr",
    "type": [
        "GRASS",
        "POISON"
    ],
    "image": {
        "imageUrl": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png"
    }
}

describe('Pokemons Load when data available', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:8080/pokemons', { body: mockedPokemons }).as('getPokemons')
        cy.mount(<HomePage />)
        cy.wait('@getPokemons')
    })

    it('displays a sidebar of Pokemons', () => {
        cy.get(`ul.${listStyles.list} li.${listStyles.item}`).should('have.length', mockedPokemons.length)
        cy.contains('#1 - Bulbasaur').should('be.visible')
        cy.contains('#2 - Ivysaur').should('be.visible')
    })

    it('positions the Pokemons sidebar on the left with 20% width', () => {
        cy.get(`div.${pageStyles.container_list}`).as('list')
        cy.window().then((win) => {
            const expectedWidth = `${0.2 * win.innerWidth}px`
            cy.get('@list').should('have.css', 'width', expectedWidth)
        })
    })

    it('displays a default guidance page when landing', () => {
        cy.contains('Welcome to the Pokémon Hub').should('be.visible')
        cy.contains('Please Select a Pokemon from the List').should('be.visible')
    })

    it('displays a details page when selected from sidebar', () => {
        cy.intercept('GET', 'http://localhost:8080/pokemons/1', { body: mockedDetails }).as('getPokemonDetails');

        cy.get(`div.${pageStyles.container_list}`).as('list')
        cy.get('@list').contains('#1 - Bulbasaur').click()
        cy.wait('@getPokemonDetails');

        cy.get(`div.${detailsStyles.details_container}`).as('details')
        cy.window().then((win) => {
            const expectedWidth = `${0.8 * win.innerWidth}px`
            cy.get('@details').should('have.css', 'width', expectedWidth)
        })
        cy.get('@details').contains('#1 - Bulbasaur').should('be.visible')
    })
})

describe('Pokemons Load when No Pokemon Available', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:8080/pokemons', { body: [] }).as('getNoPokemons')
        cy.mount(<HomePage />)
        cy.wait('@getNoPokemons')
    })

    it('displays a "No Pokémon found" notification', () => {
        cy.get(`ul.${listStyles.list} li.${listStyles.notification}`).should('have.length', 1)
    })
})

describe('Error shows when API Request Fails', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:8080/pokemons', {
            statusCode: 500, body: { message: 'Server Error' },
        }).as('getPokemons')
        cy.mount(<HomePage />)
        cy.wait('@getPokemons')
    })

    it('displays an error message', () => {
        cy.get(`ul.${errorStyles.box} li.${errorStyles.item}`).should('have.length', 1)
        cy.contains('Server error: 500')
    })
})

describe('Loading is Prevented when navigation is conducted', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:8080/pokemons', {
            delay: 2000, body: mockedPokemons,
        }).as('getPokemons')
        cy.mount(<HomePage />);
    });

    it('displays loader and removes it after fetch', () => {
        cy.get(`div.${listStyles.container_loader}`).as('loader').should('exist')
        cy.wait('@getPokemons')
        cy.get('@loader').should('not.exist')
    })

    it('halts fetch if the user navigates away before completion', () => {
        cy.get(`div.${pageStyles.container_list}`).as('list')
        cy.wait(500)
        cy.mount(<div>Foreign Element Loading... Simulates navigation...</div>)
        cy.wait(3000)
        cy.get('@list').should('not.exist')
    })
})