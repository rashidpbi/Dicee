var rand1 = Math.floor(Math.random()*6) + 1;
var rand2 = Math.floor(Math.random()*6) + 1;

document.querySelector(".img1").setAttribute("src",`./images/dice${rand1}.png`);
document.querySelector(".img2").setAttribute("src",`./images/dice${rand2}.png`);



if (rand1==rand2) {
    document.querySelector(".winning").textContent = "Draw !!!";

}
else if(rand1>rand2){
    document.querySelector(".winning").textContent = "Player 1 wins !!!";
} else{
    document.querySelector(".winning").textContent = "Player 2 wins !!!";
}

