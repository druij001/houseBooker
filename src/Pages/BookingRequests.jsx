import { useEffect, useState } from "react";
import { fetchBookings } from "../DbAccess"

export default function BookingRequests() {
    //const [] = useState();
    useEffect(() => {
        getRequests();
    }, [])

    async function getRequests() {
        let bookingData = await fetchBookings();
        console.log(bookingData);
    }

    return (
        <div>
            <h1>Booking Requests</h1>
        </div>
    )
}