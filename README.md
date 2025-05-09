# Pokémon Frontend

This is the frontend application for the Pokémon app, built with **Vite**, **React**, and **TypeScript**.

## Tech Stack

- **Vite**: A fast and lightweight development server that is optimized for modern web development. This project uses [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) & [SWC](https://swc.rs/) for Fast Refresh.
- **React**: A JavaScript library for building user interfaces, particularly single-page applications.
- **TypeScript**: A typed superset of JavaScript that adds static types to the language.
- **Yarn**: A package manager for managing dependencies, ensuring consistency and performance in dependency management.
- **NVM**: Node Version Manager to easily switch between Node.js versions.

## Setup

### 1. Clone the Repository

Clone the repository to your local machine:

```
git clone https://github.com/idan-nave/PokemonHub-frontend
```

### 2. Install Node.js (via NVM)

NVM should be installed first (https://github.com/nvm-sh/nvm). Use the following commands to install and use the correct version of Node.js:

```
nvm install node # for stable version
```

From now on, ensure you're using the correct version of Node.js with:

```
nvm use
```

This will use the Node.js version specified in the `.nvmrc` file.

### 3. Install Yarn package manager

```
sudo npm install --global yarn
```

if still needed- apply permissions over the project for ease of development, to avoid exessive need of ```sudo```.

```
sudo chown -R $(whoami):$(whoami) .../pokemon-hub-frontend
```
### 4. Install Dependencies

Once you have the correct Node.js version, install the project dependencies using Yarn:

```
yarn install
```

### 5. Setup Pokémon Backend API service

Host/Run the [API server](https://github.com/idan-nave/PokemonHub/) independenly. follow the README.md of it for setup. if locally, use:

```
 ./gradlew bootRun
```

note this app defaults to ```http://localhost:8080/pokemons``` for API requests, but a different URL can be set by adding a ```./.env.local``` file at the root of this app, and adding a custom entry, as such:
```
VITE_API_BASE_URL=http://CUSTOM_URL/pokemons
```

### 6. Run the Development Server

Start the development server with:

```
yarn dev
```

The application should now be running on [http://localhost:5137](http://localhost:5137), presenting a list of all original 151 Pokémons. Note that port ```5137``` is important, as this is the current supported port by the ackend API service.

### 7. Build the Application

To create a production build of the application:

```
yarn build
```

This will output the production files in the `dist/` directory.

### 8. Test the Application

Cypress FW is implemented for component-scoped testing.
Tests treat an entire app page as the component, and validate layout, data, dis/mount, error-throwing. Available ```.cy.tsx``` tests can be run at batch with the following command:

```
yarn cy:open # browser mode
```
OR,
```
yarn cy:run # headless mode
```