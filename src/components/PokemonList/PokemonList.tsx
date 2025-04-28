import { useEffect, useState, useRef } from "react";
import { PokemonType } from '@/types/pokemonType';
import { ErrorBox } from '@/components/ErrorBox/ErrorBox';
import { Loader } from '@/components/Loader/Loader';
import { fetchAllPokemons } from '@/api/pokemonApi';
import styles from '@/components/PokemonList/PokemonList.module.css';

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [errorArr, setErrArr] = useState<Error[]>([]);
  const [ignoreFetch, SetIgnoreFetch] = useState(false);

  const fetchIfNotIgnored = async () => {
    try {
      const pokeArr = await fetchAllPokemons();
      if (!ignoreFetch) {
        setPokemons(pokeArr)
      }
    } catch (error) {
      setErrArr(prevErrors => [...prevErrors, error as Error]);
    } finally {
      SetIgnoreFetch(true);
    }
  }

  useEffect(() => {
    fetchIfNotIgnored();
    return () => {
      SetIgnoreFetch(true);
    }
  }, []);

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