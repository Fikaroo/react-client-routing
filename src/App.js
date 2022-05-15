import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contacts from "./Pages/Contacts";
import "./index.css";

function App() {
  return (
    <div>
      <nav className="navbar justify-between flex w-2/4 m-auto">
        <Link className="navbar-brand" to="/#">
          Home
        </Link>

        <Link className="nav-link" to="/portfolio">
          Portfolio
        </Link>

        <Link className="nav-link" to="/about">
          About
        </Link>

        <Link className="nav-link" to="/contacts">
          Contacts
        </Link>
      </nav>
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
