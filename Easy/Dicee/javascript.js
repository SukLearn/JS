

var randomNumber1 = Math.floor(Math.random()*6+1);
var path1 = "images/dice" + randomNumber1 + ".png";
var picture1 = document.getElementsByClassName("img1")[0];


var randomNumber2 = Math.floor(Math.random()*6+1);
var picture2 = document.getElementsByClassName("img2")[0];
var path2 = "images/dice" + randomNumber2 + ".png";



picture1.setAttribute("src", path1);
picture2.setAttribute("src", path2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Win";
    document.querySelector("h1").style.color = "red";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Win";
    document.querySelector("h1").style.color = "green";
}else{
    document.querySelector("h1").innerHTML = "Draw";
    document.querySelector("h1").style.color = "purple";
}