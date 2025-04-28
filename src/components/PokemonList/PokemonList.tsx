import { ErrorBox } from '@/components/ErrorBox/ErrorBox';
import { Loader } from '@/components/Loader/Loader';
import { usePokemons } from "@/hooks/usePokemons";
import styles from '@/components/PokemonList/PokemonList.module.css';

export const PokemonList = () => {
  const { pokemons, errorArr, ignoreFetch } = usePokemons();

  return (
    (!ignoreFetch && errorArr.length === 0)
      ? <div className={styles.container_loader}> <Loader /> </div>
      : errorArr.length !== 0
        ? <ErrorBox errArr={errorArr} />
        : <ul className={styles.list}>
          {pokemons.map((pokemon) => (
            <li key={pokemon.pokedex} className={styles.item}>
              #{pokemon.pokedex} - {pokemon.name}
            </li>
          ))}
        </ul>
  );
};