import { useState } from "react";

// Hook para guardar en el Local Storage los TODO's
const useLocalStorage = (itemName, initialValue) => {
    const localStorageItem = localStorage.getItem(itemName)
    let parsedItems;

    // Si no existe item en el Local Storage, le asigna una lista vacía.
    // De lo contrario, convierte en un array los items existentes en parsedItems.
    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItems = []
    } else {
        parsedItems = JSON.parse(localStorageItem)
    }

    const [item, setItem] = useState(parsedItems)

    const guardarItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    }

    return { item, guardarItem };
};

export default useLocalStorage;
