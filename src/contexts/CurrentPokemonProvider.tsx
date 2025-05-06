import { useState, createContext } from 'react';

export const CurrentPokemonContext = createContext({
    currentPokedex: 0,
    setCurrentPokedex: (value: number) => { }
});

import { ReactNode } from 'react';

export const CurrentPokemonProvider = ({ children }: { children: ReactNode }) => {
    const [currentPokedex, setCurrentPokedex] = useState(0)
    return (
        <CurrentPokemonContext.Provider value={{ currentPokedex, setCurrentPokedex }} >
            {children}
        </CurrentPokemonContext.Provider>
    )
}