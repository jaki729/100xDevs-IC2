function getCurrentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let time24HourFormat = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    let time12HourFormat = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${ampm}`;
    

    console.log(time12HourFormat);
    console.log(time24HourFormat);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(getCurrentTime, 1000);
