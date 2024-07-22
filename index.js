var buttons = document.querySelectorAll(".drum"); 

// detction of mouse event
for(var i = 0; i<(buttons.length); i++){
    buttons[i].addEventListener("click", function(){
        // alert("I got clicked.");
        // buttons.style.color = white;
        this.style.color= "white";
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnnimation(buttonInnerHTML);
        
        
    });
}    

// detection of keyboard event
    document.addEventListener("keypress", function(event){
        makesound(event.key);
        buttonAnnimation(event.key);
    });


    function makesound(key){
        switch (key) {
            case "w":
                 var tom1 = new Audio("sounds/tom-1.mp3");
                 tom1.play();                
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();                
                break;
            case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();                
                   break;
                   case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();                
                   break;
                   case "j":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();                
                   break;
                   case "k":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();                
                   break;
                   case "l":
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();                
                   break;
            default:
                console.log(buttonInnerHTML);
                break;
        }
    }



 function buttonAnnimation(currentKey){
    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);
 }