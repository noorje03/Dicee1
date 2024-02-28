var random1 = Math.floor(Math.random()*6+1);
var randompic = "dice"+random1+".png";
var source = "./images/"+randompic;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" , source);




var random2 = Math.floor(Math.random()*6+1);
var randompic2 = "dice"+random2+".png";
var source2 = "./images/"+randompic2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src" , source2);




if(random1>random2){
    document.querySelector("h1").textContent="✔player1 win!";
}
else if(random1<random2){
    document.querySelector("h1").textContent = "player2 win!✔";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}