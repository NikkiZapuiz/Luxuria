import { useEffect } from "react"
import { Link } from "react-router-dom"

function ReservationsTable(props) {
    useEffect(() => {
        document.title = 'Reservations'
    }, [])
    const { reservationNumber, fullName, roomNumber, id } = props

    return (
        <>


            <tbody>
                <tr>
                    <th scope="row">{reservationNumber}</th>
                    <td>{fullName}</td>
                    <td>{roomNumber}</td>
                    <td>
                        <Link to={`/bookings/${id}`}>Details</Link>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default ReservationsTable