import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



function Bookings() {
    const { id } = useParams()
    const [reservation, setReservation] = useState({})

    const fetchReservation = async () => {
        const res = await axios(`http://localhost:8000/api/v1/reservations/${id}`)
        const reservationResult = res.data.data
        const reservationObj = {
            reservationNumber: reservationResult.reservationNumber,
            fullName: reservationResult.guest.fullName,
            email: reservationResult.guest.email,
            adultCount: reservationResult.adultCount,
            childCount: reservationResult.childCount,
            checkinDate: reservationResult.checkinDate,
            checkoutDate: reservationResult.checkoutDate,
        }
        setReservation(reservationObj);
    }

    useEffect(()=> {
        document.title = 'Reservation'
        fetchReservation();
    },[])

    useEffect(()=> {
        document.title = `Reservation- ${reservation.fullName}`
    },[reservation])

    return (
        <>
            <div className="p-5">
                <div className="text-center pb-5">
                    <h4>Reservation Details</h4>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="p-5 w-75">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th scope="row">Reservation Number:</th>
                                    <td>{reservation.reservationNumber}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Name:</th>
                                    <td>{reservation.fullName}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email:</th>
                                    <td>{reservation.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Adult:</th>
                                    <td>{reservation.adultCount}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Child:</th>
                                    <td >{reservation.childCount}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Check-in Date:</th>
                                    <td>{reservation.checkinDate}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Check-out Date:</th>
                                    <td>{reservation.checkoutDate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bookings