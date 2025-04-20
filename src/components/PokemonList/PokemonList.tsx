import { useEffect, useState } from "react";
import { Pokemon } from '@/types/pokemon';
import { fetchAllPokemons } from '@api/pokemonApi';
import styles from '@styles/PokemonList.module.css';

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchAllPokemons().then(setPokemons).catch(console.error);
  }, []);

  return (
    <ul className={styles.list}>
      {pokemons.map((pokemon) => (
        <li key={pokemon.pokedex} className={styles.item}>
          #{pokemon.pokedex} - {pokemon.name}
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
