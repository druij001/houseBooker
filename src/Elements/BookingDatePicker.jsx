import { useState } from "react"
import { DatePicker } from "rsuite";

export default function BookingDatePicker() {

    const [inDate, setInDate] = useState();
    const [outDate, setOutDate] = useState();

    return (
        <div>
            <DatePicker currentDate={inDate} setCurrentDate={(date) => setInDate()}/>
            <DatePicker currentDate={outDate} setCurrentDate={(date) => setOutDate()}/>
        </div>
    )
}