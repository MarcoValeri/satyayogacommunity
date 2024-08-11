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