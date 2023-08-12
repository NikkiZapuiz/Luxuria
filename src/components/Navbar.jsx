import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/authReducer";


function Navbar() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };


    

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary pt-4" style={{
            borderBottomStyle: "ridge",
            borderBottomWidth: "1px",
            borderBottomColor: "#ccc"
        }}>
            <div className="container-fluid">
                <img src="/logo.png" alt="logo" style={{ width: "10%", minWidth: "200px" }} />
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ color: "black" }}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                style={{ color: "white" }}
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-gear" style={{ color: "white" }}></i> Settings
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Add Users
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Remove Users
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    {/* <form className="d-flex me-5" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ color: "#293D76" }} />
                        <button className="btn" type="submit" style={{ color: "#293D76" }}>
                            Search
                        </button>
                    </form> */}
                    {isLoggedIn ? (
                        <div className="d-flex align-items-center">
                            <span className="me-3" style={{color: "#293D76"}}>Welcome, {user.fullName}</span>
                            <Link to="/logout" onClick={handleLogout} style={{ textDecoration: "none", color: "#293D76" }}>
                                Log Out
                            </Link>
                        </div>
                    ) : (
                        <Link to="/login" style={{ textDecoration: "none", color: "#293D76", marginRight: "20px" }}>
                            Log In
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
