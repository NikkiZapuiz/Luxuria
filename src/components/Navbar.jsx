import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/authReducer";

function Navbar({ openLoginPopup, openProfilePopup }) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    return (
        <nav
            className="navbar navbar-expand-lg bg-body-tertiary pt-4"
            style={{
                borderBottomStyle: "ridge",
                borderBottomWidth: "1px",
                borderBottomColor: "#ccc",
            }}
        >
            <div className="container-fluid">
                <img
                    src="/logo.png"
                    alt="logo"
                    style={{ width: "10%", minWidth: "200px", height: "9vh" }}
                />
                <button
                    className="navbar-toggler btn btn-outline-light"
                    type="button"
                    style={{ color: "black" }}
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                    style={{ color: "black" }}
                >
                    <ul className="navbar-nav ms-auto d-flex align-items-center">
                        {isLoggedIn ? (
                            <li className="nav-item me-3">
                                <button
                                    onClick={openProfilePopup}
                                    className="btn"
                                    style={{
                                        border: "none",
                                        backgroundColor: "white",
                                        color: "#293D76",
                                    }}
                                >
                                    <i className="fa-regular fa-user"></i>
                                </button>
                                <span style={{ color: "#293D76" }}>Welcome, {user.fullName}</span>
                            </li>
                        ) : null}
                        {isLoggedIn ? (
                            <li className="nav-item">
                                <Link
                                    to="/logout"
                                    onClick={handleLogout}
                                    className="nav-link"
                                    style={{ textDecoration: "none", color: "#293D76", paddingBottom: "13px" }}
                                >
                                    Log Out
                                </Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <button
                                    className="btn nav-link"
                                    onClick={openLoginPopup}
                                    style={{ textDecoration: "none", color: "#293D76" }}
                                >
                                    Log In
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
