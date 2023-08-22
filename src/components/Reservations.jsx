import ReservationsTable from "./ReservationsTable"
import { useSelector } from "react-redux";


function Reservations() {
    const reservations = useSelector(state => state.reservations);


    return (
        <>
            <div className="p-5">
                <div className="d-flex justify-content-center">
                    <form className="d-flex mb-5" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="text-center pb-5">
                    <h5>Reservations</h5>
                </div>
                <div className="d-flex justify-content-center" style={{ minHeight: "100vh" }}>

                    <div className="w-50">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Reservation #</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Room #</th>
                                    <th colSpan="2"></th>
                                </tr>
                            </thead>
                            {
                                reservations.map(
                                    reservation => <ReservationsTable 
                                    key={reservation.id}
                                    id={reservation.id}
                                    reservationNumber={reservation.reservationNumber}
                                    fullName={reservation.guest.fullName}
                                    roomNumber={reservation.room.roomNumber}
                                    email={reservation.email}
                                    roomId={reservation.roomId}
                                    userId={reservation.userId}
                                />
                                )
                            }
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reservations