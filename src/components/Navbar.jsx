import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/authReducer";
import { setUsers } from "../store/usersReducer";
import axios from "axios";
import { setReservations } from "../store/reservationsReducer";
import { setRoomInfo } from "../store/roomInfoReducer";

function Navbar({ openLoginPopup, openProfilePopup }) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    const fetchReservations = async () => {
        const res = await axios('http://localhost:8000/api/v1/reservations')
        dispatch(setReservations(res.data.data))
    }

    useEffect(() => {
        fetchReservations();
    }, [])

    const fetchUsers = async () => {
        const res = await axios('http://localhost:8000/api/v1/users')
        dispatch(setUsers(res.data.data))
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    

    const roomInfo = () => {
        dispatch(
            setRoomInfo([
                {
                    id: 1,
                    type: "Standard Room",
                    description: "Indulge in the lap of opulence with our Exquisite Deluxe Suite. Experience unparalleled luxury and comfort in an expansive living space adorned with lavish furnishings.",
                    amenities: ["Plush queen bed", "55-inch OLED TV", "Designer toiletries", "Rainfall shower"],
                    image: "/deluxe.jpg",
                },
                {
                    id: 2,
                    type: "Deluxe Room",
                    description: 'Unwind in our Elegance Superior Room, where every detail exudes sophistication. Immerse yourself in tasteful design and modern amenities.',
                    amenities: ["King bed with Egyptian cotton sheets", "65-inch 4K OLED TV", "Private minibar with premium drinks", "Spa-like bathroom with deep soaking tub"],
                    image: "/executive.jpg",
                },
                {
                    id: 3,
                    type: "Suite Room",
                    description: 'Experience the pinnacle of luxury in our Luxury Executive Suite, a haven of comfort and refinement. Enjoy expansive living and dining spaces, perfect for both relaxation and entertainment.',
                    amenities: ["Separate bedroom and living area with elegant decor", "Private terrace with panoramic city views", "In-room jacuzzi and personal butler service", "Gourmet kitchenette with top-tier appliances"],
                    image: "/suite.jpg",
                },
            ])
        );
    };

    useEffect(() => {
        roomInfo();
    }, []);

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
