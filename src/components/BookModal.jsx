import { useState } from 'react';

function RoomModal({ isOpen, onRequestClose, room }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [adultsCount, setAdultsCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);

    const handleDateChange = (e) => {
        setSelectedDate(event.target.value);
    };

    const handleAdultsChange = (e) => {
        setAdultsCount(parseInt(event.target.value));
    };

    const handleChildrenChange = (e) => {
        setChildrenCount(parseInt(event.target.value));
    };

    const handleClose = (e) => {
        onRequestClose();
    };

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`} style={{
            display: isOpen ? "block" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.4)"
        }}>
            <div>
                <div className="modal-dialog" style={{
                    margin: "auto",
                    maxWidth: "600px",
                    marginTop: "10%",
                    backgroundColor: "white",
                    borderRadius: "5PX"
                }}>
                    <div className='p-4'>
                        <div className="modal-content" style={{ border: "none" }}>
                            <button className="btn" onClick={handleClose} style={{
                                position: "absolute",
                                top: "-1%",
                                right: "-5%",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                                color: "#293D76",
                            }}> <i className="fa-solid fa-x"></i></button>
                            <img src={room.image} alt={room.name} />
                            <h2 className='mt-3'>{room.name}</h2>
                            <p>{room.description}</p>
                            <h5>Amenities:</h5>
                            <ul>
                                {room.amenities.map((amenity, index) => (
                                    <li key={index}>{amenity}</li>
                                ))}
                            </ul>
                            <br />
                            <div>
                                <h6 className='mb-4'>Booking Information:</h6>
                                <label style={{ color: "black"}}>From: </label>
                                <input type="date" onChange={handleDateChange} style={{
                                    color: "black",
                                    border: '1px solid black',
                                    height: '6vh',
                                    marginBottom: "15px"
                                }} />
                                <label style={{ color: "black", marginLeft: "2vw"}}>To: </label>
                                <input type="date" onChange={handleDateChange} style={{
                                    color: "black",
                                    border: '1px solid black',
                                    height: '6vh',
                                    marginLeft: "2px"
                                }} />
                            </div>
                            <div className='mb-4'>
                                <label style={{ color: "black" }}>Adults: </label>
                                <input type="number" value={adultsCount} min="1" onChange={handleAdultsChange} style={{
                                    color: "black",
                                    border: '1px solid black',
                                    height: '6vh',
                                    width: "8vw",
                                    marginBottom: "15px"
                                }} />
                                
                                <label style={{ color: "black",  marginLeft: "2vw" }}>Children: </label>
                                <input type="number" value={childrenCount} min="0" onChange={handleChildrenChange} style={{
                                    color: "black",
                                    border: '1px solid black',
                                    height: '6vh',
                                    width: "8vw",
                                    marginBottom: "15px"
                                }} />
                            </div>
                            <button className='btn mb-3' style={{ backgroundColor: "#293D76", color: "white" }}>Book</button>
                            <button className='btn' onClick={handleClose} style={{ backgroundColor: "#293D76", color: "white" }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomModal;



