import React from "react";
import { useLocation } from "react-router-dom";
import AdminNav from "./AdminNav";
import Navbar from "./Navbar";

function MainNavbar() {
    const location = useLocation();
    const isAdminDashboard = location.pathname === "/admin-dashboard";

    return (
        <div>
            {isAdminDashboard ? <AdminNav /> : <Navbar />}
        </div>
    );
}

export default MainNavbar;
