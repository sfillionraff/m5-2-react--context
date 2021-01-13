import { useEffect, useState } from "react";


const usePersistedState = (defaultValue, localStorageId) => {
    const [value, setValue] = useState(() => {
        let localStorageValue = localStorage.getItem(localStorageId);
        return localStorageValue ? JSON.parse(localStorageValue) : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(localStorageId, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};

export { usePersistedState };