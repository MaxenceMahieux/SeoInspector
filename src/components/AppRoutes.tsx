import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Analysis from "../pages/Analysis.tsx";
import Settings from "../pages/Settings.tsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/analysis" element={<Analysis/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
}

export default AppRoutes;
