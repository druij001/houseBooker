import { useEffect, useState } from 'react'
import { formatDatestring } from '../Functions/Dates'
import { updateBookingApproval } from '../DbAccess';

export default function BookingRequest({houseId, number, street, suburb, bookerId, bookerName, bookingId, dateCreated, startDate, endDate, numPeople, message, isConfirmed}) {

    const [approved, setApproved] = useState(isConfirmed);

    useEffect(() => {
        console.log("Hi");
    }, [approved]);

    async function setBookingApproval(status) {
        let res = await updateBookingApproval(bookingId, status);
        
        if(res)
            setApproved(status);
    }

    return (
        <div className>
            <div>
                <h2>{`${number} ${street}, ${suburb}`}</h2>
            </div>
            <div>
            <p>Lodged {formatDatestring(dateCreated)} by {bookerName}</p>
            <p>{`${startDate} - ${endDate}`}</p>
            <p>{numPeople} people</p>
            <p>{message}</p>
            </div>
            <div className='col'>
                {approved == false ? 
                <div className='row'>
                    <button onClick={() => setBookingApproval(true)}>Accept</button>
                    <button onClick={() => setBookingApproval(false)}>Reject</button>
                </div>
                :
                <div className='row'>
                    <p>Accepted!</p>
                    <button>Edit Booking</button>
                </div>
                }
            </div>
        </div>
    )
}