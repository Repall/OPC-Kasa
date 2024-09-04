import React, { createContext, useContext, useState, useEffect } from 'react';
import logementsData from '../assets/logement.json'; 

const LogementsContext = createContext();

export function LogementsProvider({ children }) {
    const [logements, setLogements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            setLogements(logementsData);
            setLoading(false);
        } catch (err) {
            setError(`Erreur lors du chargement des données: ${err.message}`);
            setLoading(false);
        }
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
