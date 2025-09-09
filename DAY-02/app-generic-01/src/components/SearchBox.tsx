'use client';

import { on } from "events";
import React, {useState, useCallback, useDeferredValue, useEffect} from "react";


interface SearchBoxProps {
    onSearch: (query: string) => void; // Funzione di callback per la ricerca
    placeholder?: string; // Placeholder per l'input di ricerca
}


export default function SearchBox({ onSearch, placeholder = "Cerca..." }: SearchBoxProps) {

    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);

    // UseCalbback per ottimizzare le performance di aggiornamento della UI
    // con caricamento ritardato

    const handleSearch = useCallback( 
        (value: string) => {
            setQuery(value);
        }, 
        []
    );

    useEffect( 
        () => {
            onSearch(deferredQuery);
        }, 
        [deferredQuery, onSearch]
    );

    return (
        <>
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder={placeholder}
                    className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-400">🔍</span>
                </div>
                { query && (
                    <button
                        onClick={() => handleSearch('')}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                        >
                        ✕
                    </button>

                }
            </div>
        
        </>
    );

};