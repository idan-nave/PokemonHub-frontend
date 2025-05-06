import { useEffect, useState, useRef, RefObject } from "react";
import { PokemonType } from '@/types/pokemonType';
import { fetchAllPokemons } from '@/api/pokemonApi';

interface UsePokemonsAPI {
  pokemons: PokemonType[];
  errors: Error[];
  isLoading: RefObject<boolean>;
}

export const usePokemons = (): UsePokemonsAPI => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [errors, setErrors] = useState<Error[]>([]);
  const isLoading = useRef(true);

  const fetchPokemons = async () => {
    isLoading.current = true;
    try {
      const pokeArr = await fetchAllPokemons();
      if (isLoading.current) {
        setPokemons(pokeArr);
        setErrors([]);
      }
    } catch (error) {
      if (isLoading.current) {
        setErrors([error as Error]);
      }
    } finally {
      isLoading.current = false;
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { pokemons, errors, isLoading };
};