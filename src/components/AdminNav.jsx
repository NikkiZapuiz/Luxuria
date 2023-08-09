import React from "react";

function Nav() {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <>
            <nav
                className="navbar navbar-expand-lg bg-body-tertiary pt-4" style={{
                    borderBottomStyle: "ridge",
                    borderBottomWidth: "1px",
                    borderBottomColor: "#ccc"
                }}>
                <div className="container-fluid">
                <img src="/logo.png" alt="logo" style={{ width: "10%", minWidth: "200px" }} />    
                    <button
                        className="me-5"
                        onClick={handleGoBack}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "white",
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="20" fill="currentColor">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M18 11H7.41l5.3-5.29A1 1 0 1 0 11.3 4.29L4.59 11l6.71 6.71a1 1 0 0 0 1.42-1.42L7.41 13H18a1 1 0 0 0 0-2z" />
                        </svg>
                    </button>
                    <a className="navbar-brand" href="#" style={{ color: "black", fontSize: "20px" }}>
                        Dashboard
                    </a>
                    <button
                        className="navbar-toggler btn btn-outline-light"
                        type="button"
                        style={{ color: "white" }}
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ color: "white" }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    style={{ color: "black" }}
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
                        <form className="d-flex me-5" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark" type="submit">
                                Search
                            </button>
                        </form>
                        <a href="#" style={{ textDecoration: "none", color: "black" }}>
                            Logout
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
