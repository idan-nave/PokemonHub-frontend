import { useEffect, useState, useRef } from "react";
import { Pokemon } from '@/types/pokemon';
import { fetchAllPokemons } from '@/api/pokemonApi';
import styles from '@/components/PokemonList/PokemonList.module.css';

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current) {
      fetchAllPokemons().then(setPokemons).catch(console.error);
    }
    return () => {
      isMounted.current = false;
    }
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