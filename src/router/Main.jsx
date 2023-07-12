import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import App from "../App";
import Locations from "./Locations";
import Products from "./products";
import Login from "../components/Login";
import Dashboard from "./Dashboard";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/Contacts" element={<h1>Contacts</h1>} />
      <Route path="/Locations" element={<Locations />} />
      <Route path="/Locations/:id" element={<Products />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Route>
  )
);
