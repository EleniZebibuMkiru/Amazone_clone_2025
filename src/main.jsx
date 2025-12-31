import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { DataProvider } from "./components/Dataprovider/Dataprovider.jsx";
import Reducer from "./Utility/Reducer";
import { initialState } from "./Utility/initialState";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider Reducer={Reducer} initialState={initialState}>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
