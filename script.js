async function loadWeather(){
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=24.899&longitude=91.872&hourly=temperature_2m&timezone=auto');
    const data = await response.json();

    console.log(data.hourly);

    timeToWeather(data.hourly.time, data.hourly.temperature_2m);
}

function addZero(smallNumber) {
    if(smallNumber < 10)
        return '0' + smallNumber;
    else
        return smallNumber;
}

function timeToWeather(timeArray, TempArray){
    const now     = new Date(); 
    const year    = now.getFullYear();
    let month   = now.getMonth()+1;
    let day     = now.getDate();
    let hour    = now.getHours();
    month = addZero(month);
    day = addZero(day);
    hour = addZero(hour);
    const currentTime = `${year}-${month}-${day}T${hour}:00`;
    console.log(currentTime);
    const currentTemp = TempArray[timeArray.indexOf(currentTime)];
    console.log(currentTemp);
    temp.innerText = currentTemp;
}

loadWeather();