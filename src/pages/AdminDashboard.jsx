import React, { useEffect } from "react";
import RoomMonitoring from "../components/RoomMonitoring";

function AdminDashboard() {
    useEffect(() => {
        document.title = "Admin Dashboard";
    }, []);

    const generateRooms = (totalRooms) => {
        const rooms = [];

        for (let i = 1; i <= totalRooms; i++) {
            let roomNumber;
            if (i < 10) {
                roomNumber = "100" + i;
            } else {
                roomNumber = "10" + i;
            }
            const availability = true;
            rooms.push({
                id: i,
                roomNumber,
                availability,
            });
        }

        return rooms;
    };

    const totalRooms = 30;
    const rooms = generateRooms(totalRooms);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="mb-4">
                        <h4>Customer information</h4>
                    </div>
                    <div>
                        <p>Booking Number:</p>
                        <p>Room Number:</p>
                        <p>Guest Name:</p>
                        <p>email address:</p>
                        <p>Contact Number:</p>
                        <p>Stay duration:</p>
                        <p>Check-in date:</p>
                        <p>Check-out date</p>
                    </div>
                    <br />
                    <button className="btn btn-light">Check-in</button>
                    <button className="btn btn-light ms-2">Check-out</button>
                </div>
                <div className="col-md-6 mt-2" style={{ color: "white" }}>
                    <RoomMonitoring rooms={rooms} />
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
