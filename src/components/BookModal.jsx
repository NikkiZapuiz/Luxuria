import axios from 'axios';
import { useFormik } from 'formik';

function RoomModal({ isOpen, onRequestClose, room }) {

    const formik = useFormik({
        initialValues: {
            reservationNumber: "",
            roomType: room.type,
            roomNumber: "",
            roomId: "",
            userId: '',
            checkinDate: "",
            checkoutDate: "",
            adultCount: "1",
            childCount: "0",
        },
        onSubmit: async (values) => {
            values.roomNumber = generateRoomNumber(values.roomType);
            values.reservationNumber = generateReservationNumber();

            const roomNumberInt = parseInt(values.roomNumber);
            if (roomNumberInt >= 1001 && roomNumberInt <= 1030) {
                values.roomId = (roomNumberInt - 1000).toString();
            } else {
                values.roomId = "0";
            }

            const res = await axios.post('http://localhost:8000/api/v1/reservations', {
                reservationNumber: values.reservationNumber,
                roomType: values.roomType,
                roomNumber: values.roomNumber,
                checkinDate: values.checkinDate,
                checkoutDate: values.checkoutDate,
                adultCount: values.adultCount,
                childCount: values.childCount,
                roomId: values.roomId,
                userId: '4',
            },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

            console.log(res);
            formik.resetForm();
            handleClose();
        },
    });

    const handleClose = () => {
        onRequestClose();
    };

    const generateRoomNumber = (roomType) => {
        const baseNumber = {
            "Suite Room": 1001,
            "Deluxe Room": 1011,
            "Standard Room": 1021,
        }[roomType];

        if (baseNumber !== undefined) {
            const randomNumber = Math.floor(Math.random() * 10);
            return `${baseNumber + randomNumber}`;
        }
    };

    const generateReservationNumber = () => {
        const randomDigits = Math.floor(10000 + Math.random() * 90000);
        return `lux-${randomDigits}`;
    };


    return (
        <>
            {isOpen && (
                <div className="modal" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                    <div className="modal-dialog" style={{ margin: "auto", maxWidth: "90%", width: "600px", marginTop: "10vh", backgroundColor: "white", borderRadius: "5px" }}>
                        <div className="p-4">
                            <div className="modal-content" style={{ border: "none" }}>
                                <button className="btn" onClick={handleClose} style={{ position: "absolute", top: "-1%", right: "-5%", transform: "translateY(-50%)", cursor: "pointer", color: "#293D76" }}>
                                    <i className="fas fa-times"></i>
                                </button>
                                <div className="d-flex flex-column align-items-center my-3">
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="container">
                                            <div key={room.id}>
                                                <img src={room.image} alt={room.type} style={{ width: "100%" }} />
                                                <h2 className="mt-3">{room.type}</h2>
                                                <p>{room.description}</p>
                                                <h5>Amenities:</h5>
                                                <ul>
                                                    {room.amenities.map((amenity, index) => (
                                                        <li key={index}>{amenity}</li>
                                                    ))}
                                                </ul>
                                                <div className="booking-form">
                                                    <div className="row justify-content-around">
                                                        <div className="row justify-content-around">
                                                            <div className="col-md-6 mb-3">
                                                                <label style={{ color: "#293D76" }}>From: </label>
                                                                <input
                                                                    type="date"
                                                                    id="checkinDate"
                                                                    name="checkinDate"
                                                                    value={formik.values.checkinDate}
                                                                    onChange={formik.handleChange}
                                                                    className="form-control"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <label style={{ color: "#293D76" }}>To: </label>
                                                                <input
                                                                    type="date"
                                                                    id="checkoutDate"
                                                                    name="checkoutDate"
                                                                    value={formik.values.checkoutDate}
                                                                    onChange={formik.handleChange}
                                                                    className="form-control"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row justify-content-around">
                                                            <div className="col-md-6 mb-3">
                                                                <label style={{ color: "#293D76" }}>Adults: </label>
                                                                <input
                                                                    type="number"
                                                                    id="adultCount"
                                                                    name="adultCount"
                                                                    value={formik.values.adultCount}
                                                                    min="1"
                                                                    onChange={formik.handleChange}
                                                                    className="form-control"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <label style={{ color: "#293D76" }}>Children: </label>
                                                                <input
                                                                    type="number"
                                                                    id="childCount"
                                                                    name="childCount"
                                                                    value={formik.values.childCount}
                                                                    min="0"
                                                                    onChange={formik.handleChange}
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn mb-3 mt-4" style={{ backgroundColor: "#293D76", color: "white", width: "100%" }} type="submit">
                                                Book
                                            </button>
                                            <button className="btn" onClick={handleClose} style={{ backgroundColor: "#293D76", color: "white", width: "100%" }}>
                                                Close
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default RoomModal;



