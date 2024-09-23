const dayOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dayOfTheWeekFull = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

export const setCurrentDateAndTime = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let currentDate = `${day}/${month + 1}/${year} - ${hours}:${minutes}:${seconds}`;
    return currentDate;
}

export const formatDateAndTime = getDateAndTime => {
    const output = getDateAndTime.replace('T', ' - ');
    return output;
}

export const formatTime = getDateAndTime => {
    const output = getDateAndTime.substr(11);
    return output;
}

export const formatDate = getDateAndTime => {
    const date = new Date(getDateAndTime);
    const weekDay = date.getUTCDay();
    const day = date.getDate();
    const month = date.getMonth();

    const output = `${dayOfTheWeek[weekDay]} ${day}/${month + 1}`;
    return output;
}

export const formatLongDate = getDateAndTime => {
    const date = new Date(getDateAndTime);
    const weekDay = date.getUTCDay();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const output = `${dayOfTheWeekFull[weekDay]} ${day}/${month}/${year}`;
    return output;
}