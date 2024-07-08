import { useEffect, useState } from "react";
import DatePicker from "../Elements/DatePicker";
import { insertBookingDetails } from "../DbAccess";
import { useParams } from "react-router-dom";

export default function BookStay() {
    let { houseId } = useParams(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numPeople, setNumPeople] = useState(0);
    const [message, setMessage] = useState("");

    useEffect (() => {
    }, [startDate, endDate]);


    async function submitPage() {

        let res = await insertBookingDetails(houseId, startDate, endDate, numPeople, message);
        let bookingId = res?.bookingId;
        if(res) {
            alert(res);
        } else {
            alert("ERROR");
        }

        window.location.href = `/Booking/${bookingId}/complete`;
    }

    return (
        <div>
            <h1>Book Stay</h1>
            <p>{`${startDate} - ${endDate}`}</p>
            <div className="col">
                <DatePicker currentDate={startDate} setCurrentDate={(date) => setStartDate(date)}/>
                <DatePicker currentDate={endDate} setCurrentDate={(date) => setEndDate(date)}/>
            </div>
            <div>
                <input name="numPeople" type="number" placeholder="number of people" onChange={(val) => setNumPeople(val.target.value)}/>
            </div>
            <div>
                <input name="message" type="text" placeholder="Message to host (optional)" onChange={(mes) => setMessage(mes.target.value)}/>
            </div>
            <div>
                <button onClick={() => submitPage()}>Submit</button>
            </div>
        </div>
    );
}