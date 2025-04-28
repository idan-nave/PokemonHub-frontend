import { useEffect, useState } from "react";
import { PokemonType } from '@/types/pokemonType';
import { fetchAllPokemons } from '@/api/pokemonApi';

interface UsePokemonsAPI {
  pokemons: PokemonType[];
  errorArr: Error[];
  ignoreFetch: boolean;
}

export const usePokemons = (): UsePokemonsAPI => {
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

  return { pokemons, errorArr, ignoreFetch };

};