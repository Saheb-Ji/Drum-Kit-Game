for(var i =0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHtml = this.innerHTML;
        playSound(buttonInnerHtml);
        activeButton(buttonInnerHtml);
    });
}
function playSound(key){
    switch (key) {
    case "w":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
    
    case "a":
        var tom1 = new Audio("./sounds/tom-2.mp3");
        tom1.play();
        break;
    
    case "s":
        var tom1 = new Audio("./sounds/tom-3.mp3");
        tom1.play();
        break;
    
    case "d":
        var tom1 = new Audio("./sounds/tom-4.mp3");
        tom1.play();
        break;
    
    case "j":
        var tom1 = new Audio("./sounds/snare.mp3");
        tom1.play();
        break;
    
    case "k":
        var tom1 = new Audio("./sounds/crash.mp3");
        tom1.play();
        break;
    
    case "l":
        var tom1 = new Audio("./sounds/kick-bass.mp3");
        tom1.play();
        break;
    
    default: console.log(buttonInnerHtml);
        break;
}}
document.addEventListener("keypress", function(event){
    playSound(event.key);
    activeButton(event.key);
});

function activeButton(key){
    var actButton = document.querySelector("."+key);
    actButton.classList.add("pressed");
    setTimeout(function(){
        actButton.classList.remove("pressed");
    }, 100);   
}