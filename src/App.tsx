import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Links from "./pages/Links.tsx";
import Settings from "./pages/Settings";

function App() {

    const navLinks = [
        { name: "Home", url: "/" },
        { name: "Links", url: "/" },
        { name: "Parameters", url: "/" },
    ]

    return (
        <Router>
            <div style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
                {/* Navbar */}
                <nav style={{ marginBottom: "20px" }}>
                    {navLinks.map((link, index) => (
                        <Link
                            to={link.url}
                            key={index}
                            className="nav-link"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/links" element={<Links />} />
                    <Route path="/settings" element={<Settings />} />

                    {/* Redirection vers la page d'accueil par défaut */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
