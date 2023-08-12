import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import HomePage from "./pages/Homepage";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
    return (

        <Provider store={store}>
            <BrowserRouter>
                <MainNavbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
