import { useParams } from "react-router-dom";
import BookingStatus from "../Elements/BookingStatus";
import { fetchBookingDetails } from "../DbAccess";
import { useEffect, useState } from "react";

export default function BookingComplete() {

    let { bookingId } = useParams(null);
    const[ isApproved, setIsApproved] = useState(false);

    useEffect(() => {
        getBookingDetails();
    }, [])

    async function getBookingDetails() {
        let bookingDetails = await fetchBookingDetails(bookingId);
        console.log("A", bookingDetails.is_confirmed);
        bookingDetails?.is_confirmed && setIsApproved(bookingDetails.is_confirmed)
    }

    return (
        <div>
            <h1>Booking Complete!</h1>
            <BookingStatus approved={isApproved}/>
        </div>
    )
}