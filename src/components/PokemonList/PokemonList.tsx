import { ErrorBox } from '@/components/ErrorBox/ErrorBox';
import { Loader } from '@/components/Loader/Loader';
import { usePokemons } from "@/hooks/usePokemons";
import styles from '@/components/PokemonList/PokemonList.module.css';

export const PokemonList = () => {
  const { pokemons, errors, isLoading } = usePokemons();

  if (isLoading.current) {
    return (
      <div className={styles.container_loader}>
        <Loader />
      </div>
    );
  }

  if (errors.length !== 0) {
    return (
      <ErrorBox errArr={errors} />
    );
  }

  if (!pokemons.length) {
    return (
      <ul className={styles.list}>
        <li className={styles.notification}>no entries available</li>
      </ul>
    );
  }

  return (
    <ul className={styles.list}>
      {pokemons.map((pokemon) => (
        <li key={pokemon.pokedex} className={styles.item}>
          #{pokemon.pokedex} - {pokemon.name}
        </li>
      ))}
    </ul>
  );
};