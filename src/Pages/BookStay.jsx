import { useEffect, useState } from "react";
import DatePicker from "../Elements/DatePicker";

export default function BookStay() {
    const [inDate, setInDate] = useState(new Date());
    const [outDate, setOutDate] = useState(new Date());

    useEffect (() => {
        console.log(inDate)
    }, [inDate, outDate]);

    return (
        <div>
            <h1>Book stay</h1>
            <p>{`${inDate} - ${outDate}`}</p>
            <div className="col">
                <DatePicker currentDate={inDate} setCurrentDate={(date) => setInDate(date)}/>
                <DatePicker currentDate={outDate} setCurrentDate={(date) => setOutDate(date)}/>
            </div>
            <input placeholder="Message to host (optional)"></input>
        </div>
    );
}