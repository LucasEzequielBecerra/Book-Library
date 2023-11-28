import { useEffect, useState } from 'react';

export default function useLocalStorage(key, initialValue) {
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        const localStorageItem = localStorage.getItem(key);
        if (!localStorageItem) {
            localStorage.setItem(key, JSON.stringify(initialValue));
        } else {
            setItem(JSON.parse(localStorageItem));
        }
    }, [key]);

    const saveItem = (value) => {
        setItem(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [item, saveItem];
}