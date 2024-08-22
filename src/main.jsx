import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import Home from "./pages/Home";
import A_Propos from "./pages/A_Propos";
import Fiche_Logement from "./pages/FicheLogement";
import P_404 from "./pages/404";

import { LogementsProvider } from "./components/GetLogement";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "*",
                element: <P_404 />,
            },
            {
                path: "a-propos",
                element: <A_Propos />,
            },
            {
                path: "logement/:id",
                element: <Fiche_Logement />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LogementsProvider>
            <RouterProvider router={router} />
        </LogementsProvider>
    </React.StrictMode>
);
