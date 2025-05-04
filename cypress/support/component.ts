import { mount } from 'cypress/react'
import '../../src/styles/App.css'
import '../../src/components/PokemonList/PokemonList.module.css'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)