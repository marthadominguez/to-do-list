import { createContext, useContext } from 'react';

// Creamos el contexto 
export const ColorContext = createContext(null);

// useColorMode usa el contexto que acabamos de crear
export const useColorMode = () => {
    return useContext(ColorContext)
}

// tendremos que importarlo en App.js y envolver toda nuestra aplicación en ese provider.
