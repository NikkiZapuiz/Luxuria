import { useState } from "react";
import { useLocation } from "react-router-dom";
import AdminNav from "./AdminNav";
import Navbar from "./Navbar";
import LoginAsUser from "./LoginAsUser";
import Register from "./Register";
import Profile from "./Profile";


function MainNavbar() {
    const location = useLocation();
    const isAdminDashboard = location.pathname === "/admin-dashboard";
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [showRegisterPopup, setShowRegisterPopup] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const openLoginPopup = () => {
        setShowRegisterPopup(false);
        setShowLoginPopup(true);
    };

    const closeLoginPopup = () => {
        setShowLoginPopup(false);
    };


    const openRegisterPopup = () => {
        setShowLoginPopup(false);
        setShowRegisterPopup(true);
    };

    const closeRegisterPopup = () => {
        setShowRegisterPopup(false);
    };

    const openProfilePopup = () => {
        setShowProfile(true);
    };
    const closeProfilePopup = () => {
        setShowProfile(false);
    };

    return (
        <div>
            {isAdminDashboard ? <AdminNav /> : <Navbar
                showLoginPopup={showLoginPopup}
                openLoginPopup={openLoginPopup}
                showProfile={showProfile}
                openProfilePopup={openProfilePopup}
            />}
            {showLoginPopup && <LoginAsUser
                closeLoginPopup={closeLoginPopup}
                showRegisterPopup={showRegisterPopup}
                openRegisterPopup={openRegisterPopup}
            />}
            {showRegisterPopup && <Register
                closeRegisterPopup={closeRegisterPopup}
                showLoginPopup={showLoginPopup}
                openLoginPopup={openLoginPopup}
            />}
            {showProfile && <Profile
                showProfile={showProfile}
                openProfilePopup={openProfilePopup}
                closeProfilePopup={closeProfilePopup}
            />}
            {/* {showLoginPopup && <RoomDisplay
                showLoginPopup={showLoginPopup}
                openLoginPopup={openLoginPopup}
            />} */}
        </div>
    );
}

export default MainNavbar;
