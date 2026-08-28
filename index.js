var rdice = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
];

var tas = (Math.floor(Math.random()*6));
var tas2 = (Math.floor(Math.random()*6));

document.querySelector(".img1").setAttribute("src",rdice[tas]) ;
document.querySelector(".img2").setAttribute("src",rdice[tas2]) ;

if (tas > tas2) {
    document.querySelector("h1").innerHTML="Player 1 Win";


}
else if ( tas2 > tas) {
       document.querySelector("h1").innerHTML="Player 2 Win";

}
else {
           document.querySelector("h1").innerHTML="draw";

}


