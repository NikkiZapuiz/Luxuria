import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import HomePage from "./pages/Homepage";

function App() {
    return (
        <Router>
            <MainNavbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
