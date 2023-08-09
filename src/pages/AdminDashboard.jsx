import React, { useEffect } from "react";
import RoomMonitoring from "../components/RoomMonitoring";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container">
            <div className="d-flex justify-content-center p-5" style={{ color: "white" }}>
                <RoomMonitoring rooms={rooms} />
            </div>
        </div>
    );
}

export default AdminDashboard;
