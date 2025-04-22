import { PokemonList } from '@/components/PokemonList/PokemonList';
import styles from '@/styles/HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.container_main}>
      <div className={styles.container_list}>
        <PokemonList />
      </div>
      <div className={styles.container_content}>
        <h1>Welcome to the Pokémon Hub</h1>
      </div>
    </div>
  );
};