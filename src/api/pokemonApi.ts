import { apiFetch } from '@/api/fetchApi';
import { PokemonType } from '@/types/pokemonType';
import { PokemonDetailsType } from '@/types/pokemonDetailsType';

export const fetchAllPokemons = async (): Promise<PokemonType[]> => {
  return apiFetch<PokemonType[]>("");
};

export const fetchByPokedex = async (pokedex: number): Promise<PokemonDetailsType> => {
  return apiFetch<PokemonDetailsType>(`/${pokedex}`);
};