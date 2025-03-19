import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import New from "./components/pages/New";
import Login from "./components/LoginRegistration/Login";
import Register from "./components/LoginRegistration/Registr";
import Navbar from "./components/navbar/navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/new" element={<New />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
