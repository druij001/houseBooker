import { useEffect, useState } from "react";
import DatePicker from "../Elements/DatePicker";
import { insertBookingDetails } from "../DbAccess";
import { useParams } from "react-router-dom";
import { formatDatestring } from "../Functions/Dates";
import { reRouteTo } from "../Functions/commonFunctions";

export default function BookStay() {
    let { houseId } = useParams(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numPeople, setNumPeople] = useState(1);
    const [message, setMessage] = useState("");
    const minStaylength = 1
    const maxStayLength = 7;
    const maxPeople = 15;

    useEffect (() => {
    }, [startDate, endDate]);


    async function submitPage() {
        let stayDays = Math.round(endDate-startDate)/86400000;

        if(numPeople<=0 || numPeople>maxPeople) {
            alert("Enter a vale from 1 to 10");
        } else if(stayDays <minStaylength || stayDays > maxStayLength){
            alert(`${stayDays} is out of bounds`);
        } else {

        let res = await insertBookingDetails(houseId, startDate, endDate, numPeople, message);
        let bookingId = res?.id;
        if(!res)
            alert("ERROR");

        reRouteTo(`/Booking/${bookingId}/complete`);
    }
    }

    return (
        <div>
            <h1>Book Stay</h1>
            <p>{`${formatDatestring(startDate)} - ${formatDatestring(endDate)}`}</p>
            <div className="col">
                <DatePicker currentDate={startDate} setCurrentDate={(date) => setStartDate(date)}/>
                <DatePicker currentDate={endDate} setCurrentDate={(date) => setEndDate(date)}/>
            </div>
            <div>
                <input name="numPeople" type="number" placeholder="number of people" max={maxPeople} min={1} onChange={(val) => setNumPeople(val.target.value)}/>
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