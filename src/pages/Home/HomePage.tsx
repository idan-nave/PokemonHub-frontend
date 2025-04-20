import { PokemonList } from '@components/PokemonList/PokemonList';
import styles from '@styles/HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <PokemonList />
    </div>
  )
}

export default HomePage