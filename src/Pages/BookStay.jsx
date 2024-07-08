import { useEffect, useState } from "react";
import DatePicker from "../Elements/DatePicker";

export default function BookStay() {
    const [inDate, setInDate] = useState(new Date());
    const [outDate, setOutDate] = useState(new Date());
    const [numPeople, setNumPeople] = useState(0);
    const [message, setMessage] = useState("");

    useEffect (() => {
    }, [inDate, outDate]);


    function submitPage() {
        console.log("-----------------");
        console.log("i", inDate);
        console.log("n", numPeople);
        console.log(message);
    }

    return (
        <div>
            <h1>Book Stay</h1>
            <p>{`${inDate} - ${outDate}`}</p>
            <div className="col">
                <DatePicker currentDate={inDate} setCurrentDate={(date) => setInDate(date)}/>
                <DatePicker currentDate={outDate} setCurrentDate={(date) => setOutDate(date)}/>
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