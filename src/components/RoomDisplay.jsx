import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './errorHandling';
import RoomModal from './BookModal';
import { setError } from '../store/errorReducer';

function RoomDisplay() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const dispatch = useDispatch();

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
            dispatch(setError("Please Login First!"));
        }
    };

    const rooms = [
        {
            id: 1,
            name: "Standard Room",
            description: "Indulge in the lap of opulence with our Exquisite Deluxe Suite. Experience unparalleled luxury and comfort in an expansive living space adorned with lavish furnishings.",
            amenities: ["Plush queen bed", "55-inch OLED TV", "Designer toiletries", "Rainfall shower"],
            image: "/deluxe.jpg",
        },
        {
            id: 2,
            name: "Deluxe Room",
            description: 'Unwind in our Elegance Superior Room, where every detail exudes sophistication. Immerse yourself in tasteful design and modern amenities.',
            amenities: ["King bed with Egyptian cotton sheets", "65-inch 4K OLED TV", "Private minibar with premium drinks", "Spa-like bathroom with deep soaking tub"],
            image: "/executive.jpg",
        },
        {
            id: 3,
            name: "Suite Room",
            description: 'Experience the pinnacle of luxury in our Luxury Executive Suite, a haven of comfort and refinement. Enjoy expansive living and dining spaces, perfect for both relaxation and entertainment.',
            amenities: ["Separate bedroom and living area with elegant decor", "Private terrace with panoramic city views", "In-room jacuzzi and personal butler service", "Gourmet kitchenette with top-tier appliances"],
            image: "/suite.jpg",
        },
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                {rooms.map((room) => (
                    <div className="col-md-4" key={room.id}>
                        <div className="card" style={{height: "80vh"}}>
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
