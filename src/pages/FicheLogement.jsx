import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import Tag from "../components/Tag";
import { useLogements } from "../components/GetLogement";
import Collapse from "../components/Collapse";
import Star from "../components/Star";
import Carousel from "../components/Carousel";

function FicheLogement() {
    const { id } = useParams();
    const { logements, loading, error } = useLogements();
    const navigate = useNavigate(); // Initialise le hook

    if (loading) {
        return <div>Chargement des données...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    const logement = logements.find((l) => l.id === id);

    if (!logement) {
        navigate('/404');

    }
    return (
        <>
            <div className="flex flex-col gap-5 px-5 md:px-20">
                <Carousel imageSlider={logement.pictures} />
                <div className="flex flex-col lg:flex-row lg:justify-between gap-2">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-red-400 text-xl font-medium">{logement.title}</h1>
                        <p className="font-medium">{logement.location}</p>

                        <div className="flex flex-row items-center gap-5 text-white">
                            <Tag tags={logement.tags} />
                        </div>
                    </div>
                    <div className="flex flex-row-reverse lg:flex-col justify-between items-center gap-2">
                        <div className="flex flex-row items-center gap-4">
                            <p className="text-red-400">{logement.host.name}</p>
                            <img className="w-12 h-12 lg:w-16 lg:h-16 rounded-full" src={logement.host.picture} alt="Photo Vendeur" />
                        </div>
                        <div className="flex flex-row max-sm:w-6">
                            <Star rating={logement.rating} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-7 lg:gap-14">
                    <div className="lg:w-1/2">
                        <div>
                            <Collapse title={"Description"} content={logement.description} />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        {/* <p className="bg-red-400 w-full text-white rounded-lg px-3 py-1">Équipements</p> */}
                        <div>
                            <Collapse title={"Équipements"} content={logement.equipments} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FicheLogement;
