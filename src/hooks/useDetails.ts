import { useEffect, useState, useRef, useContext } from "react";
import { PokemonDetailsType } from '@/types/pokemonDetailsType';
import { fetchByPokedex } from '@/api/pokemonApi';
import { CurrentPokemonContext } from '@/contexts/CurrentPokemonProvider';

interface UseDetailsAPI {
  details: PokemonDetailsType | undefined;
  errors: Error[];
  isLoading: boolean;
  currentPokedex: number;
  setCurrentPokedex: (value: number) => void;
}

export const useDetails = (): UseDetailsAPI => {
  const [details, setDetails] = useState<PokemonDetailsType | undefined>(undefined);
  const [errors, setErrors] = useState<Error[]>([]);
  const { currentPokedex, setCurrentPokedex } = useContext(CurrentPokemonContext);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDetails = async () => {
    setIsLoading(true);
    if (currentPokedex) {
      try {
        const pokeDet = await fetchByPokedex(currentPokedex);
        setDetails(pokeDet);
        setErrors([]);
      } catch (error) {
        setErrors([error as Error]);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [currentPokedex]);

  return { details, errors, isLoading, currentPokedex, setCurrentPokedex };
};