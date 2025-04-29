import { useEffect, useState } from "react";
import { PokemonType } from '@/types/pokemonType';
import { fetchAllPokemons } from '@/api/pokemonApi';

interface UsePokemonsAPI {
  pokemons: PokemonType[];
  errors: Error[];
  isLoading: boolean;
}

export const usePokemons = (): UsePokemonsAPI => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [errors, setErrors] = useState<Error[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemons = async () => {
    setIsLoading(true);
    try {
      const pokeArr = await fetchAllPokemons();
      if (isLoading) {
        setIsLoading(false);
        setPokemons(pokeArr);
      }
    } catch (error) {
      if (isLoading) {
        setErrors([error as Error]);
      }
    } finally {
      setIsLoading(false);
      setErrors([]);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { pokemons, errors, isLoading };
};