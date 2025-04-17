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

```
git clone https://github.com/idan-nave/PokemonHub-frontend
```

### 2. Install Node.js (via NVM)

NVM should be first installed (https://github.com/nvm-sh/nvm).
Run the following to install and use the correct Node.js version:

```
nvm install
```

From now on- ensure you're using the right version of Node.js with NVM.
```
nvm use
```
This will use the Node.js version specified in the `.nvmrc` file.

### 3. Install Yarn package manager

```
sudo npm install --global yarn
sudo yarn global add create-vite
```
apply permissions over the project for ease of development, if needed.

```
sudo chown -R $(whoami):$(whoami) .../pokemon-hub-frontend
```
### 4. Install Dependencies

Once you have the correct Node.js version, use Yarn to install the project dependencies:

```
yarn install
```

### 5. Run the Development Server

Start the development server with:

```
yarn dev
```

The application should now be running on [http://localhost:5137](http://localhost:5137), and you should see a "Hello world" message.

### 6. Build the Application

To create a production build of the application:

```
yarn build
```

This will output the production files in the `dist/` directory.

---

Once you've set this up, you can proceed to create a **PR** and submit it for review.