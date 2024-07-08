import { useEffect, useState } from "react";
import {formatDatestring, getMonthName, getMonthDates, getDayAbbr, handleDecreaseMonth, handleIncreaseMonth} from './Dates'

const DatePicker = ({currentDate, setCurrentDate}) => {
    const [monthDates, setMonthDates] = useState(null);

    useEffect(() => {
        if(!monthDates) {
            currentDate ? setMonthDates(getMonthDates(new Date(currentDate))) : setMonthDates(getMonthDates(new Date()));
        }
    }, [currentDate])

    function increaseMonth (increase) {

        let currentMonth, currentYear;
        let returnDate = new Date();

        if(increase === true) {
            [currentMonth, currentYear] = handleIncreaseMonth(currentDate || new Date());
        }
        else {
            [currentMonth, currentYear] = handleDecreaseMonth(currentDate || new Date());
        }

        returnDate.setMonth(currentMonth);
        returnDate.setFullYear(currentYear);
        setMonthDates(getMonthDates(returnDate))
        setCurrentDate(returnDate);
    }
    
    function handleDayPress(day) {
        let date = currentDate ? new Date(currentDate) : new Date();
        date.setDate(day);
        setCurrentDate(date);
    }

    const isButtonPressed = (day) => {

        if(currentDate?.getDate() === day)
            return true;
        else
            return false;
      };
  
    return (
        <div>
            <MonthPickerHeader className=""
                currentDate={currentDate || new Date()}
                onBackPress = {() => increaseMonth(false)}
                onForwardPress = {() => increaseMonth(true)}/>
            <div className="row">
            {monthDates?.map((week, i) => (
                    <MonthWeek 
                        key={i}
                        days={week}
                        index={i} 
                        selectDate={(id) => handleDayPress(id)}
                        currentDate={currentDate}/>
                ))}
            </div>

            <button onClick={() => setCurrentDate(null)}>
                <p>{currentDate ? formatDatestring(currentDate) : "No Date"}</p>
                <p>Cancel</p>
            </button>
        </div>        
    )
}

export default DatePicker;


export function MonthWeek({days, index, selectDate, currentDate}) {

    return (
        <div>
            <p>{getDayAbbr(index)}</p>
            {days.map((day, i) => (
                <button className={"dateFilled"} key={i} onClick={() => selectDate(day)}>
                    <p className="plusButton">{day}</p>
                </button>
            ))}
        </div>
    )
}

export function MonthPickerHeader({currentDate, onForwardPress, onBackPress}) {
    
    return (
        <div className="row">
                <button className="plusButton" onClick={() => onBackPress()}>
                    <p>Back</p>
                </button>
                
                <p>{getMonthName(currentDate.getMonth())} {currentDate.getFullYear()}</p>
                
                <button className="plusButton" onClick={() => onForwardPress()}>
                    <p>Next</p>
                </button>
            </div>
    )
}