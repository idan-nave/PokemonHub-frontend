import { apiFetch } from '@/api/fetchApi';
import { PokemonType } from '@/types/pokemonType';

export const fetchAllPokemons = async (): Promise<PokemonType[]> => {
  return apiFetch<PokemonType[]>("");
};