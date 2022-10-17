import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";
import { MoviesContextProvider } from "./context/MoviesContext/MoviesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MoviesContextProvider>
        <App />
      </MoviesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
