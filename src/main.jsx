import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { DataProvider } from "./components/Dataprovider/Dataprovider.jsx";
import Reducer from "./Utility/Reducer";
import { initialState } from "./Utility/initialState";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider Reducer={Reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
