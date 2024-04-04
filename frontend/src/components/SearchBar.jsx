import { useState } from 'react';
import { SearchIcon } from "@heroicons/react/outline";

export default function SearchBar({ onSearch }) {
    // État pour gérer si l'input est focus ou contient du texte.
    const [isFocused, setIsFocused] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e) => setIsFocused(e.target.value !== '' ? true : false);

    const handleChange = (event) => {
        setInputValue(event.target.value);
        onSearch(event.target.value); // Appel de la fonction passée en props à chaque changement
    };

    return (
        <div className="flex items-center justify-center w-full pt-24">
            <div className="relative flex flex-row items-center w-full h-full mx-4 rounded-lg bg-primary-lightgray">
                <SearchIcon className="w-6 h-6 ml-4 text-primary-gray" />
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full h-12 px-4 py-2 duration-150 ease-in-out bg-transparent rounded-md outline-none text-primary-foreground text-md"
                />
                {/* Simulation du placeholder */}
                <span className={` text-primary-gray absolute left-0 ml-12 py-2 pointer-events-none duration-150 ease-in-out transform ${isFocused ? 'translate-y-[-1rem] text-[10px]' : 'translate-y-0 text-md'}`}>
                    Search...
                </span>
            </div>
        </div>
    );
}
