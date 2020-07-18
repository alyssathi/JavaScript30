function setDate(){
    //seconds
    const secondHand = document.querySelector('.second-hand');

    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60)*360) + 90;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    //minutes
    const minHand = document.querySelector('.min-hand');
    const mins = now.getMinutes();
    const minsDegrees = ((mins/60)*360) + 90;
    minHand.style.transform =  `rotate(${minsDegrees}deg)`

    //hours
    const hourHand = document.querySelector('.hour-hand');
    const hours = now.getHours();
    const hourDegrees = ((hours/12)*360)+90;
    hourHand.style.transform= `rotate(${hourDegrees}deg)`

}

setInterval(setDate, 1000);