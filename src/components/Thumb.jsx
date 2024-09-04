import React from "react";
import { useLogements } from "./GetLogement";
import { Link } from "react-router-dom";

function Thumb() {
    const { logements, loading, error } = useLogements();

    if (loading) {
        return <div>Chargement des données...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <>
            {logements.map((logement) => (
                <Link key={logement.id} to={`/logement/${logement.id}`}>
                    <div className="flex flex-col-reverse w-[335px] h-[255px] max-sm:size-64 bg-red-400 rounded-xl transition duration-700 hover:scale-105">
                        <p className="z-5 absolute bg-red-400 text-white text-lg font-bold rounded-xl w-[335px] max-sm:w-64 px-5 py-2">
                            {logement.title}
                        </p>
                        <img className="h-full w-full object-cover rounded-xl" src={logement.cover} alt="Image aperçu logement" />
                    </div>
                </Link>
            ))}
        </>
    );
}

export default Thumb;
