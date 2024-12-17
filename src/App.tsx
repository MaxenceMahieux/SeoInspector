import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";

function App() {
    return (
        <Router>
            <div style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
                {/* Navbar */}
                <nav style={{ marginBottom: "20px" }}>
                    <Link to="/" style={{ marginRight: "10px" }}>Accueil</Link>
                    <Link to="/about" style={{ marginRight: "10px" }}>À Propos</Link>
                    <Link to="/settings">Paramètres</Link>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/settings" element={<Settings />} />

                    {/* Redirection vers la page d'accueil par défaut */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
