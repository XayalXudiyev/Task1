import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FavoriteContext from "./store/favoriteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <FavoriteContext>
        <App />
    </FavoriteContext>
);
