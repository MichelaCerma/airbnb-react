import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { router } from "./router/Main.jsx";

import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
