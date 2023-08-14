import React, { useState } from 'react';

function RoomModal({ isOpen, onRequestClose, room }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [adultsCount, setAdultsCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleAdultsChange = (event) => {
        setAdultsCount(parseInt(event.target.value));
    };

    const handleChildrenChange = (event) => {
        setChildrenCount(parseInt(event.target.value));
    };

    return (
        <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? "block" : "none", backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
            <div className='p-5'>
                <div className="modal-dialog" style={{ margin: "auto", maxWidth: "500px", marginTop: "10%" }}>
                    <div className="modal-content">
                        <img src={room.image} alt={room.name} />
                        <h2>{room.name}</h2>
                        <p>{room.description}</p>
                        <h5>Amenities:</h5>
                        <ul>
                            {room.amenities.map((amenity, index) => (
                                <li key={index}>{amenity}</li>
                            ))}
                        </ul>
                        <br />
                        <div>
                            <h6>Booking Information:</h6>
                            <label>From: </label>
                            <input type="date" onChange={handleDateChange} />
                            <label>To: </label>
                            <input type="date" onChange={handleDateChange} />
                        </div>
                        <div>
                            <label>Adults: </label>
                            <input type="number" value={adultsCount} min="1" onChange={handleAdultsChange} />
                        </div>
                        <div>
                            <label>Children: </label>
                            <input type="number" value={childrenCount} min="0" onChange={handleChildrenChange} />
                        </div>
                        <button className='btn' onClick={onRequestClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomModal;



