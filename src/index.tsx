import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router/routers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
