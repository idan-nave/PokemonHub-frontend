import { useEffect, useState, useRef } from "react";
import { PokemonType } from '@/types/pokemonType';
import { ErrorBox } from '@/components/ErrorBox/ErrorBox';
import { Loader } from '@/components/Loader/Loader';
import { fetchAllPokemons } from '@/api/pokemonApi';
import styles from '@/components/PokemonList/PokemonList.module.css';

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const isMounted = useRef(false);
  const [errorArr, setErrArr] = useState<Error[]>([]);

  const fetchIfMounted = async () => {
    try {
      const pokeArr = await fetchAllPokemons();
      if (isMounted.current) {
        setPokemons(pokeArr)
      }
    } catch (error) {
      isMounted.current = false;
      setErrArr(prevErrors => [...prevErrors, error as Error]);
    }
  }

  useEffect(() => {
    isMounted.current = true;
    fetchIfMounted();
    return () => {
      isMounted.current = false;
    }
  }, []);

  return (
    (!isMounted.current && errorArr.length === 0)
      ?
      <div className={styles.container_loader}> <Loader/> </div>
        : errorArr.length !== 0
        ? <ErrorBox errArr={errorArr} />
        : <ul className={styles.list}>
          {pokemons.map((pokemon) => (
            <li key={pokemon.pokedex} className={styles.item}>
              #{pokemon.pokedex} - {pokemon.name}
            </li>
          ))
          }
        </ul>
        );
};