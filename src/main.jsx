import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import Location from "./router/Locations.jsx";
import Products from "./router/products.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/About",
        element: <h1>About</h1>,
      },
      {
        path: "/Contacts",
        element: <h1>Contacts</h1>,
      },
      {
        path: "/Locations",
        element: <Location />,
      },
      {
        path: "/Locations/:id",
        element: <Products />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
