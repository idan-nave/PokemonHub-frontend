import React, { useState } from 'react';
import { ErrorBox } from '@/components/ErrorBox/ErrorBox';
import { Loader } from '@/components/Loader/Loader';
import { usePokemons } from "@/hooks/usePokemons";
import { useDetails } from "@/hooks/useDetails";
import styles from '@/components/PokemonList/PokemonList.module.css';

export const PokemonList = () => {
  const { pokemons, errors, isLoading } = usePokemons();
  const { setCurrentPokedex } = useDetails();
  const [checkedItem, setCheckedItem] = useState<number | null>(null);

  const handleSelect = (pokedex: number) => {
    setCurrentPokedex(pokedex);
    setCheckedItem(pokedex);
  };

  if (isLoading.current) {
    return (
      <div className={styles.container_loader}>
        <Loader />
      </div>
    );
  }

  if (errors.length !== 0) {
    return (
      <ErrorBox errArr={errors} />
    );
  }

  if (!pokemons.length) {
    return (
      <ul className={styles.list}>
        <li className={styles.notification}>no entries available</li>
      </ul>
    );
  }

  return (
    <ul className={styles.list}>
      {pokemons.map((pokemon) => (
        <li
          key={pokemon.pokedex}
          onClick={() => handleSelect(pokemon.pokedex)}
          className={`${styles.item} ${checkedItem === pokemon.pokedex ? styles.current_item : ''}`}>
          #{pokemon.pokedex} - {pokemon.name}
        </li>
      ))}
    </ul>
  );
};