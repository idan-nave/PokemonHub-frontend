import { PokemonList } from '@/components/PokemonList/PokemonList';
import { PokedexDetails } from '@/components/PokedexDetails/PokedexDetails';
import { useDetails } from "@/hooks/useDetails";
import styles from '@/pages/Home/HomePage.module.css';

export const HomePage = () => {
  const { selectedPokedex, setSelectedPokedex } = useDetails();

  const arr = selectedPokedex;
  const handleNavigateBack = () => {
    setSelectedPokedex((selectedPokedex.length > 1) ? arr.slice(1) : [0]);
  }

  return (
    <div className={styles.container_main}>
      <div className={styles.container_list}>
        <PokemonList />
      </div>
      <div className={styles.container_content}>
        <button className={styles.go_back_button}
          onClick={handleNavigateBack}
          disabled={selectedPokedex.length <= 1}>
          &#8592;
        </button>
        <PokedexDetails />
      </div>
    </div>
  );
};