for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handledrum);
}
function handledrum() {
  var buttonHTML = this.innerHTML;
  makesound(buttonHTML);
  buttonAnimation(buttonHTML);
}

addEventListener("keypress", function (event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentkey) {
  var buttonactive = document.querySelector("." + currentkey);
  buttonactive.classList.add("pressed");
  setTimeout(function () {
    buttonactive.classList.remove("pressed");
  }, 100);
}

function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log("Invalid key: " + key);
  }
}
