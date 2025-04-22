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
sudo yarn global add create-vite
```

if still needed- apply permissions over the project for ease of development, to avoid exessive need of ```sudo```.

```
sudo chown -R $(whoami):$(whoami) .../pokemon-hub-frontend
```
### 4. Install Dependencies

Once you have the correct Node.js version, install the project dependencies using Yarn:

```
yarn init      # reply for Qs to setup project metadata
yarn install
```

This will install the necessary packages and manage dependencies via **Yarn**'s `node_modules/` directory, described by  ```yarn.lock```.

### 5. Run the Development Server

Start the development server with:

```
yarn dev
```

The application should now be running on [http://localhost:5137](http://localhost:5137), presenting a list of all original 151 Pokémons.

### 6. Build the Application

To create a production build of the application:

```
yarn build
```

This will output the production files in the `dist/` directory.

### Notes- Development Dependencies

We use the following development-only dependencies for better development experience and scalability:

```
yarn add --dev @types/node path-browserify
```

@types/node: Provides TypeScript definitions for Node.js built-in modules. This is especially useful when writing configuration files (like vite.config.ts) or using Node-specific features in a TypeScript environment.

path-browserify: A browser-compatible fallback for Node's path module. This ensures compatibility and smooth bundling in browser-based apps when certain libraries depend on Node.js internals.
