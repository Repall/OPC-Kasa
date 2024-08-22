import React, { createContext, useContext, useEffect, useState } from 'react';

const LogementsContext = createContext();

export function LogementsProvider({ children }) {
    const [logements, setLogements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/public/logement.json") 
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setLogements(data);
                setLoading(false);
            })
            .catch(err => {
                setError(`Erreur lors du chargement des données: ${err.message}`);
                setLoading(false);
            });
    }, []);

    return (
        <LogementsContext.Provider value={{ logements, loading, error }}>
            {children}
        </LogementsContext.Provider>
    );
}

export function useLogements() {
    return useContext(LogementsContext);
}
