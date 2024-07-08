import { fetchBookingDetails } from "../DbAccess";
import { useEffect, useState } from "react";
import { formatDatestring } from "../Functions/Dates";

export default function BookingStatus({bookingId}) {

    const [isApproved, setIsApproved] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [numPeople, setNumPeople] = useState(null);

    useEffect(() => {
        getBookingDetails();
    }, [])

    async function getBookingDetails() {
        let bookingDetails = await fetchBookingDetails(bookingId);
        bookingDetails?.is_confirmed && setIsApproved(bookingDetails.is_confirmed);
        
        setStartDate(formatDatestring(bookingDetails.start_date));
        setEndDate(formatDatestring(bookingDetails.end_date));
        setNumPeople(bookingDetails.num_people);
    }


    return (
        <div>
            <h2>{isApproved ? `Approved by owner` : `Awaiting approval from owner`}</h2>
            <p>{`${numPeople} ${numPeople == 1 ? "person" : "people"}`}</p>
            <p>{`From ${startDate} to ${endDate}`}</p>
        </div>
    )
}