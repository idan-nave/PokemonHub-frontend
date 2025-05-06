import { PokemonList } from '@/components/PokemonList/PokemonList';
import styles from '@/pages/Home/HomePage.module.css';
import { CurrentPokemonProvider } from '@/contexts/CurrentPokemonProvider';
import { PokedexDetails } from '@/components/PokedexDetails/PokedexDetails';

export const HomePage = () => {
  return (
    <CurrentPokemonProvider>
      <div className={styles.container_main}>
        <div className={styles.container_list}>
          <PokemonList />
        </div>
        <div className={styles.container_content}>
          <PokedexDetails />
        </div>
      </div>
    </CurrentPokemonProvider>
  );
};