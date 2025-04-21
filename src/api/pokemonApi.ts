import { apiFetch } from '@/api/fetchApi';
import { Pokemon } from '@/types/pokemon';

export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
  return apiFetch<Pokemon[]>("");
};