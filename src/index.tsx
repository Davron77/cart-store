import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UseCartProvider } from "./context/useCart";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UseCartProvider>
      <App />
    </UseCartProvider>
  </React.StrictMode>
);
