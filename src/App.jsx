import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import NavBar from "./components/Navbar";
import { roomList } from "./mocks/reservations";

function App() {
  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
