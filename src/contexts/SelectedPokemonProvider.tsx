import { useState, createContext } from 'react';

interface SelectedPokemonContextProps {
    selectedPokedex: number[];
    setSelectedPokedex: (value: number[]) => void;
}

export const SelectedPokemonContext = createContext<SelectedPokemonContextProps>({
    selectedPokedex: [],
    setSelectedPokedex: () => { },
});

import { ReactNode } from 'react';

export const SelectedPokemonProvider = ({ children }: { children: ReactNode }) => {
    const [selectedPokedex, setSelectedPokedex] = useState([0])
    return (
        <SelectedPokemonContext.Provider value={{ selectedPokedex, setSelectedPokedex }} >
            {children}
        </SelectedPokemonContext.Provider>
    )
}