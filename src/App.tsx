import { HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import AppRoutes from "./components/AppRoutes.tsx";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <AppRoutes />
            </div>
        </Router>
    );
}

export default App;
