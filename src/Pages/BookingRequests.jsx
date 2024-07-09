import { useEffect, useState } from "react";
import { fetchBookings } from "../DbAccess"
import BookingRequest from "../Elements/BookingRequest";

export default function BookingRequests() {

    const [bookingData, setBookingData] = useState([]);

    //const [] = useState();
    useEffect(() => {
        getRequests();
    }, [])

    async function getRequests() {
        let bookingData = await fetchBookings();
        setBookingData(bookingData);
        console.log(bookingData);
    }

    return (
        <div>
            <h1>Booking Requests</h1>

            {bookingData ? bookingData.map((booking) => (
                <BookingRequest
                key={booking.id}
                houseId={booking.Houses.id} 
                number={booking.Houses.number} 
                street={booking.Houses.street} 
                suburb={booking.Houses.suburb} 
                bookerId={booking.profiles.id}
                bookerName={booking.profiles.full_name}
                bookingId={booking.id}
                dateCreated={booking.created_at}
                startDate={booking.start_date}
                endDate={booking.end_date}
                numPeople={booking.num_people}
                message={booking.message}
                isConfirmed={booking.is_confirmed}/>
            )) : <h2>No bookings</h2>}
        </div>
    )
}