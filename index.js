for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAni(buttonInnerHTML);
    });

}

document.addEventListener("keypress",function(event){
   makesound(event.key);
   buttonAni(event.key);
});

function makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("codingforlife0804/drum-kit/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("codingforlife0804/drum-kit/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("codingforlife0804/drum-kit/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("codingforlife0804/drum-kit/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("codingforlife0804/drum-kit/crash.mp3");
            crash.play();
            break;
        case "k":
            var kickbass = new Audio("codingforlife0804/drum-kit/kick-bass.mp3");
            kickbass.play();
            break;
        case "l":
            var snare = new Audio("codingforlife0804/drum-kit/snare.mp3");
            snare.play();
            break;
        default:console.log(buttonInnerHTML)
            break;
    }

}

function buttonAni(currentKey){
    var activebtn = document.querySelector("." + currentKey);
    activebtn.classList.add("pressed");
    setTimeout(function() {
      activebtn.classList.remove("pressed");
    }, 100);
}














