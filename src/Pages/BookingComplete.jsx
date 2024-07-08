import { useParams } from "react-router-dom";
import BookingStatus from "../Elements/BookingStatus";
import { reRouteTo } from "../Functions/commonFunctions";

export default function BookingComplete() {

    let { bookingId } = useParams(null);

    return (
        <div>
            <h1>Booking Complete!</h1>
            <BookingStatus bookingId={bookingId}/>
            <div>
                <button onClick={() => reRouteTo("/Houses")}>Back</button>
            </div>
        </div>
    )
}