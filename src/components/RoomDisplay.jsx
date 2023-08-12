import React from 'react';
import { useNavigate } from 'react-router-dom';


function RoomDisplay({ isLoggedIn }) {
    const navigate = useNavigate();

    const handleBookNow = () => {
        if (isLoggedIn) {
            alert("Room booked successfully!");
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="/deluxe.jpg" className="card-img-top" style={{height: "40vh"}} alt="Room 1" />
                        <div className="card-body">
                            <h5 className="card-title" style={{color: "#293D76"}}>Standard Room</h5>
                            <p className="card-text" style={{color: "#293D76"}}>Enjoy a comfortable stay in our standard room.</p>
                            <button className="btn" style={{backgroundColor: "#293D76", color: "white"}} onClick={handleBookNow}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="/executive.jpg" className="card-img-top" style={{height: "40vh"}} alt="Room 2" />
                        <div className="card-body">
                            <h5 className="card-title" style={{color: "#293D76"}}>Deluxe Room</h5>
                            <p className="card-text" style={{color: "#293D76"}}>Experience luxury in our deluxe room with a stunning view.</p>
                            <button className="btn" style={{backgroundColor: "#293D76", color: "white"}} onClick={handleBookNow}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="/suite.jpg" className="card-img-top" style={{height: "40vh"}} alt="Room 3" />
                        <div className="card-body">
                            <h5 className="card-title" style={{color: "#293D76"}}>Suite Room</h5>
                            <p className="card-text" style={{color: "#293D76"}}>Indulge yourself in our spacious and elegant suite room.</p>
                            <button className="btn" style={{backgroundColor: "#293D76", color: "white"}} onClick={handleBookNow}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomDisplay;
