const keydown = (event) => {
    //play sounds
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return; //short stop
    audio.currentTime = 0;
    audio.play();

    //toggle class
    key.classList.toggle("playing");
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return; //short stop
    this.classList.remove("playing")
}


const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('webkitTransitionEnd', removeTransition));

window.addEventListener('keydown', keydown);