# Pokémon Frontend

This is the frontend application for the Pokémon app, built with **Vite**, **React**, and **TypeScript**.

## Tech Stack

- **Vite**: A fast and lightweight development server that is optimized for modern web development. This project uses [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) & [SWC](https://swc.rs/) for Fast Refresh.
- **React**: A JavaScript library for building user interfaces, particularly single-page applications.
- **TypeScript**: A typed superset of JavaScript that adds static types to the language.
- **Yarn**: A package manager for managing dependencies.
- **NVM**: Node Version Manager to easily switch between Node.js versions.

## Setup

### 1. Clone the Repository

Clone the repository to your local machine.

```bash
git clone https://github.com/idan-nave/PokemonHub-frontend
```

### 2. Install Yarn package manager

```bash
sudo npm install --global yarn
sudo yarn global add create-vite
```
apply permissions over the project for ease of development.

```bash
sudo chown -R $(whoami):$(whoami) .../pokemon-hub-frontend
```

### 3. Install Node.js (via NVM)

Ensure you're using the right version of Node.js with NVM. If you don't have NVM installed, follow the installation instructions [here](https://github.com/nvm-sh/nvm).

Run the following to install and use the correct Node.js version:

```bash
nvm install
nvm use
```

This will use the Node.js version specified in the `.nvmrc` file.

### 4. Install Dependencies

Once you have the correct Node.js version, use Yarn to install the project dependencies:

```bash
yarn install
```

### 5. Run the Development Server

Start the development server with:

```bash
yarn dev
```

The application should now be running on [http://localhost:5137](http://localhost:5137), and you should see a "Hello world" message.

### 6. Build the Application

To create a production build of the application:

```bash
yarn build
```

This will output the production files in the `dist/` directory.

---

Once you've set this up, you can proceed to create a **PR** and submit it for review.



### 7. Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
