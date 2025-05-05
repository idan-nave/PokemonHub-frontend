import { ErrorBox } from '@/components/ErrorBox/ErrorBox';
import { Loader } from '@/components/Loader/Loader';
import { usePokemons } from "@/hooks/usePokemons";
import styles from '@/components/PokemonList/PokemonList.module.css';

export const PokemonList = () => {
  const { pokemons, errors, isLoading } = usePokemons();

  if (isLoading) {
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