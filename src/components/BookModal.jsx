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
                    <p>Welcome to our comfortable and inviting standard rooms, where convenience meets affordability. Our standard rooms are thoughtfully designed to provide you with a relaxing and enjoyable stay, making them the perfect choice for both business and leisure travelers.</p>
                    <ul>
                        <p><strong>Room Features:</strong></p>
                        <li><strong>Cozy Bedding:</strong> Sink into our plush bedding and enjoy a restful night's sleep. Choose from a variety of bed sizes to suit your preferences.</li>
                        <li><strong>Private Retreat:</strong> Each standard room boasts a private en-suite bathroom, complete with a modern shower or bathtub. Fresh towels and complimentary toiletries are provided for your convenience.</li>
                        <li><strong>Functional Workspace:</strong> Stay productive with a dedicated work desk and ergonomic chair. High-speed Wi-Fi is available, ensuring you stay connected throughout your stay.</li>
                        <li><strong>Entertainment:</strong> Kick back and unwind with a flat-screen TV offering a selection of cable channels, perfect for catching up on your favorite shows.</li>
                        <li><strong>Climate Comfort:</strong> Enjoy personalized climate control in your room, ensuring your comfort no matter the weather outside.</li>
                        <li><strong>Ample Storage:</strong> Store your belongings easily in the closet with hangers and a dresser, keeping your space organized and clutter-free.</li>
                        <li><strong>Refreshing Illumination:</strong> The room features strategically placed lighting to create a warm and inviting atmosphere.</li>
                        <li><strong>Thoughtful Extras:</strong> For your convenience, a phone for local calls and a safe for your valuables are provided.</li>
                        <li><strong>Scenic Views:</strong> Some of our standard rooms offer views of vibrant cityscape, adding a touch of urban charm to your stay.</li>
                        <li><strong>In-Room Dining:</strong> Indulge in delicious meals from the comfort of your room with our room service options.</li>
                    </ul>
                    <div>
                        <p>Date:</p>
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
