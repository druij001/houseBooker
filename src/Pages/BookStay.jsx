import { useEffect, useState } from "react";
import DatePicker from "../Elements/DatePicker";

export default function BookStay() {
    const [currentDate, setCurrentDate] = useState(new Date());


    useEffect (() => {
        console.log(currentDate)
    }, [currentDate]);

    return (
        <div>
            <h1>Book stay</h1>
            <div className="col">
                <DatePicker currentDate={currentDate} setCurrentDate={(date) => setCurrentDate(date)}/>
            </div>
            <input placeholder="Message to host (optional)"></input>
        </div>
    );
}