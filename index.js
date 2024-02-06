var numberOfDrumButtons = document.querySelectorAll("button").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(bb){

    switch (bb) {
        case "w":
    
         var ab=new Audio("./sounds/tom-1.mp3");
         ab.play();
         break;
    
         case "a":
    
         var ab=new Audio("./sounds/tom-2.mp3");
         ab.play();
         break;
    
         case "s":
    
         var ab=new Audio("./sounds/tom-3.mp3");
         ab.play();
         break;
    
         case "d":
    
         var ab=new Audio("./sounds/tom-4.mp3");
         ab.play();
         break;
    
         case "j":
    
         var ab=new Audio("./sounds/snare.mp3");
         ab.play();
         break;
    
         case "k":
    
         var ab=new Audio("./sounds/crash.mp3");
         ab.play();
         break;
    
         case "l":
    
         var ab=new Audio("./sounds/kick-bass.mp3");
         ab.play();
         break;
    
         default:
            console.log(key);
    
    }
    




}



function buttonAnimation(b){

 var abc=document.querySelector("."+b);

 abc.classList.add("pressed");

 setTimeout(function(){
  abc.classList.remove("pressed");
 },100);

 

  


}