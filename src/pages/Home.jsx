import React from "react";
import { Link } from "react-router-dom";
import { useLogements } from "../components/GetLogement";

import Thumb from "../components/Thumb";

function Home() {
    const { logements, loading, error } = useLogements();

    if (loading) {
        return <div>Chargement des données...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <>
            
            <div className="px-5 md:px-20"> 
                <div className="flex flex-col items-center justify-center ">
                    <img
                        className="relative h-[111px] lg:h-56 w-full object-cover object-right opacity-100 brightness-50 rounded-2xl"
                        src="img/Image source 1.png"
                        alt="Image Background"
                    />
                    <p className=" text-white absolute max-sm:px-10 max-sm:text-3xl text-4xl lg:text-6xl font-bold shadow_text">
                        Chez vous, partout et ailleurs
                    </p>
                </div>
                <div className="flex flex-col max-md:items-center md:flex-row md:justify-center md:flex-wrap md:rounded-xl md:bg-gray-100 my-6 md:p-16 2xl:py-10 gap-y-5 md:gap-y-[50px] md:gap-x-[60px] px-5 md:px-20">
                    <Thumb />
                </div>
            </div>
            
        </>
    );
}

export default Home;
