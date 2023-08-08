import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Nav from "./components/AdminNav";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";

function App() {

    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar />
                        <HomePage />
                    </>
                    

                } />
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/admin-dashboard" element={
                <>
                    <Nav />
                    <AdminDashboard />
                </>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
