import { apiFetch } from "./api";
import { Pokemon } from "../types/pokemon";

export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
  return apiFetch<Pokemon[]>("/");
};