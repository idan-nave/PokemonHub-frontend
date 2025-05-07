import { HomePage } from '@/pages/Home/HomePage';
import { SelectedPokemonProvider } from './contexts/SelectedPokemonProvider';

export const App = () => {
  return (
    <SelectedPokemonProvider>
      <HomePage />
    </SelectedPokemonProvider>
  );
};