import React from 'react';

function RoomMonitoring({ rooms }) {
    const renderCell = (room) => {
        return (
            <div
                key={room.id}
                style={{
                    width: "80px",
                    height: "80px",
                    // border: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    fontWeight: "bold",
                    backgroundColor: room.availability ? "#293D76" : "#D02F23",
                }}
            >
                {room.roomNumber}
            </div>
        );
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 80px)", gap: "2px" }}>
                    {rooms.map((room) => renderCell(room))}
                </div>
            </div>
        </div>
    );
}

export default RoomMonitoring;
