import { useEffect, useState, useContext } from "react";
import { PokemonDetailsType } from '@/types/pokemonDetailsType';
import { fetchByPokedex } from '@/api/pokemonApi';
import { SelectedPokemonContext } from '@/contexts/SelectedPokemonProvider';

interface UseDetailsAPI {
  details: PokemonDetailsType | undefined;
  errors: Error[];
  isLoading: boolean;
  selectedPokedex: number[];
  setSelectedPokedex: (value: number[]) => void;
}

export const useDetails = (): UseDetailsAPI => {
  const [details, setDetails] = useState<PokemonDetailsType | undefined>(undefined);
  const [errors, setErrors] = useState<Error[]>([]);
  const { selectedPokedex, setSelectedPokedex } = useContext(SelectedPokemonContext);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDetails = async () => {
    setIsLoading(true);
    if (selectedPokedex[0]) {
      try {
        const pokeDet = await fetchByPokedex(selectedPokedex[0]);
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
  }, [selectedPokedex]);

  return { details, errors, isLoading, selectedPokedex, setSelectedPokedex };
};