import React, { useState } from "react";
import { useSelector } from "react-redux";
import RoomModal from "./BookModal";

function RoomDisplay() {
    const rooms = useSelector(state => state.roomInfo);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);

    const openModal = (room) => {
        setSelectedRoom(room);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedRoom(null);
        setIsModalOpen(false);
    };

    const handleBook = (room) => {
        openModal(room);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {rooms.map((room) => (
                    <div className="col-md-4 pb-3" key={room.id}>
                        <div className="card shadow" style={{ height: "80vh" }}>
                            <img
                                src={room.image}
                                className="card-img-top"
                                alt={room.type}
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: "#293D76" }}>
                                    {room.type}
                                </h5>
                                <p className="card-text" style={{ color: "#293D76" }}>
                                    {room.price}
                                </p>
                                <p className="card-text" style={{ color: "#293D76" }}>
                                    {room.description}
                                </p>
                                <button
                                    className="btn"
                                    style={{ backgroundColor: "#293D76", color: "white" }}
                                    onClick={() => handleBook(room)}
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
