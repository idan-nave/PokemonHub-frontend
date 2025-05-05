<<<<<<< HEAD
import { useEffect, useState, useRef, RefObject } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> main
import { PokemonType } from '@/types/pokemonType';
import { fetchAllPokemons } from '@/api/pokemonApi';

interface UsePokemonsAPI {
  pokemons: PokemonType[];
  errors: Error[];
<<<<<<< HEAD
  isLoading: RefObject<boolean>;
=======
  isLoading: boolean;
>>>>>>> main
}

export const usePokemons = (): UsePokemonsAPI => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [errors, setErrors] = useState<Error[]>([]);
<<<<<<< HEAD
  const isLoading = useRef(true);

  const fetchPokemons = async () => {
    isLoading.current = true;
    try {
      const pokeArr = await fetchAllPokemons();
      if (isLoading.current) {
        isLoading.current = false;
=======
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemons = async () => {
    setIsLoading(true);
    try {
      const pokeArr = await fetchAllPokemons();
      if (isLoading) {
        setIsLoading(false);
>>>>>>> main
        setPokemons(pokeArr);
        setErrors([]);
      }
    } catch (error) {
<<<<<<< HEAD
      if (isLoading.current) {
        setErrors([error as Error]);
      }
    } finally {
      isLoading.current = false;
=======
      if (isLoading) {
        setErrors([error as Error]);
      }
    } finally {
      setIsLoading(false);
>>>>>>> main
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { pokemons, errors, isLoading };
};