import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RoomModal from './BookModal';

function RoomDisplay() {
    const navigate = useNavigate();

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);

    const openModal = (room) => {
        setSelectedRoom(room);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleBookNow = (room) => {
        if (isLoggedIn) {
            openModal(room);
        } else {
            navigate("/login");
        }
    };

    const rooms = [
        {
            id: 1,
            name: "Standard Room",
            description: "Enjoy a comfortable stay in our standard room.",
            image: "/deluxe.jpg",
        },
        {
            id: 2,
            name: "Deluxe Room",
            description: "Experience luxury in our deluxe room with a stunning view.",
            image: "/executive.jpg",
        },
        {
            id: 3,
            name: "Suite Room",
            description: "Indulge yourself in our spacious and elegant suite room.",
            image: "/suite.jpg",
        },
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                {rooms.map((room) => (
                    <div className="col-md-4" key={room.id}>
                        <div className="card">
                            <img
                                src={room.image}
                                className="card-img-top"
                                style={{ height: "40vh" }}
                                alt={room.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: "#293D76" }}>
                                    {room.name}
                                </h5>
                                <p className="card-text" style={{ color: "#293D76" }}>
                                    {room.description}
                                </p>
                                <button
                                    className="btn"
                                    style={{ backgroundColor: "#293D76", color: "white" }}
                                    onClick={() => handleBookNow(room)}
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedRoom && (
                <RoomModal isOpen={isModalOpen} onRequestClose={closeModal} room={selectedRoom} />
            )}
        </div>
    );
}

export default RoomDisplay;
