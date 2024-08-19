import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./pages/Home"
import A_Propos from "./pages/A_Propos"
import Fiche_Logement from "./pages/Fiche_Logement"
import P_404 from "./pages/P_404"

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="a-propos" element={<A_Propos />} />
                <Route path="fiche-logement" element={<Fiche_Logement />} />
                <Route path="*" element={<P_404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
