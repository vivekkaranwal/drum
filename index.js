
for( var i = 0; i<7; i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
         var button = this.innerHTML;
         makeSound(button);
         animation(button);

});
}
document.addEventListener("keypress",function(event){
      makeSound(event.key);
      animation(event.key);
});

function makeSound(Key){

  switch (Key) {
     case 'a':
     var audio = new Audio("sounds/crash.mp3");
     audio.play();
     break;
     case 's':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
     case 'd':
       var audio = new Audio("sounds/snare.mp3");
       audio.play();
       break;
     case 'f':
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
     case 'j':
           var audio = new Audio("sounds/tom-2.mp3");
           audio.play();
           break;
     case 'k':
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
     case 'l':
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
    default: console.log(button);
}
}
function animation(button){
    var image = document.querySelector("."+button);
    image.classList.add("pressed");
    setTimeout(function(){
    image.classList.remove("pressed");
  },100);

}
