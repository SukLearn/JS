


// on mouse
// choose all class drums
var drum = document.querySelectorAll(".drum");



// for each class drum make sound
for ( var click of drum){
    click.onclick = function(){
        var buttonInnerHTML = this.innerHTML;


        makeSound(buttonInnerHTML);
    }
}

// on keyboard

document.addEventListener("keydown", function(event){
    makeSound(event.key);
})

function makeSound (key){
    switch(key){
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
           var kickBass = new Audio("sounds/kick-bass.mp3");
           kickBass.play();
         break;
         case "l":
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
         break;  


         default: console.log(buttonInnerHTML);
    }
}






// function keeper(name, age, cleaningRooms, yearsOfExp){
//     this.name = name;
//     this.age = age;
//     this.cleaningRooms = cleaningRooms;
//     this.yearsOfExp = yearsOfExp;
//     this.clean = function () {
//         alert("cleaning is hard");
//         stealFromRooms();
//         take();
//     }
// }

// keeper1= new keeper("timmy", 19, ["sex dungeon", "bathroom", "bedroom"], 19);


// console.log(keeper1.name);