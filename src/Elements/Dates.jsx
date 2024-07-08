export const Dates = [
  { name: 'January', number: 0, daysInMonth: 31 },
  { name: 'February', number: 1, daysInMonth: 28 },
  { name: 'March', number: 2, daysInMonth: 31 },
  { name: 'April', number: 3, daysInMonth: 30 },
  { name: 'May', number: 4, daysInMonth: 31 },
  { name: 'June', number: 5, daysInMonth: 30 },
  { name: 'July', number: 6, daysInMonth: 31 },
  { name: 'August', number: 7, daysInMonth: 31 },
  { name: 'September', number: 8, daysInMonth: 30 },
  { name: 'October', number: 9, daysInMonth: 31 },
  { name: 'November', number: 10, daysInMonth: 30 },
  { name: 'December', number: 11, daysInMonth: 31 },
];

function extractMonthNames() {
  return Dates.map(month => month.name);
}

export function getMonthName(monthNumber) {
  
  const months = extractMonthNames();

  // Ensure the monthNumber is within the valid range (1 to 12)
  if (monthNumber >= 0 && monthNumber <= 11) {
    return months[monthNumber];
  } else
      return 'Invalid month number';
}

export function getDaysInMonth(monthNumber) {
  const selectedMonth = Dates.find(month => month.number === monthNumber);

  if (selectedMonth) {
      return selectedMonth.daysInMonth;
  } else
      return null;
}

export function getMonthDates(date) {

  date.setDate(1);
  let offset = date.getDay();
  let daysInCurrentMonth = getDaysInMonth(date.getMonth());
  
  const daysArray = Array.from({ length: daysInCurrentMonth }, (_, index) => index + 1);

  const sunArray = [];
  const monArray = [];
  const tuesArray = [];
  const wedArray = [];
  const thursArray = [];
  const FriArray = [];
  const satArray = [];


  //Get Fridays
  daysArray.forEach(day => {

    switch((day+offset) % 7) {
      case 1:
        sunArray.push(day);
        break;
      case 2:
        monArray.push(day);
        break;
      case 3:
        tuesArray.push(day);
        break;
      case 4:
        wedArray.push(day);
        break;
      case 5:
        thursArray.push(day);
        break;
      case 6:
        FriArray.push(day);
        break;
      case 0:
        satArray.push(day);
        break;
      default:
        console.log("invalid", day);
    }
  });
  
  return addEmptySpaces([monArray, tuesArray, wedArray, thursArray, FriArray, satArray, sunArray]);
}

function addEmptySpaces(monthData) {

  let firstDayFound = false;

  monthData.forEach((monthDay) => {

    if(monthDay[0] === 1)
    {
      firstDayFound = true;
    }
    
    if(!firstDayFound)
      monthDay.unshift(null);
  })

  return monthData;
}

export function getDayAbbr(day) {

  switch((day) % 7) {
    case 6:
      return "Su";
    case 0:
      return "Mo";
    case 1:
      return "Tu";
    case 2:
      return "We";
    case 3:
      return "Th";
    case 4:
      return "Fr";
    case 5:
      return "Sa";
    default:
      console.log("invalid", day);
      return null;
  }
}

export default function isToday(day, month) {
  const today = new Date();

  if (today.getDate() === day && today.getMonth() === month)
    return true;

  else 
    return false;

}

export function handleIncreaseMonth(currentDate) {

  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

    if(currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    }
    else {
        currentMonth = (currentMonth + 1);
    }

    return [currentMonth, currentYear];
}

export function handleDecreaseMonth(currentDate) {
 
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

    if(currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    }
    else {                
        currentMonth = (currentMonth - 1);
    }

    return [currentMonth, currentYear];
}

export function formatDatestring(date) {

  let handledDate = new Date(date);

  let month = handledDate.toLocaleString('default', {month: 'short'})
  let dateString = handledDate.getDate() + " " + month + " " + handledDate.getFullYear();
  
  return dateString;
}