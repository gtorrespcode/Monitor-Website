let circle = document.getElementById("circle");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");
let rotateValue = circle.style.transform;
let rotateSum;

upBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

downBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

let home = document.getElementById("home");
let monitor = document.getElementById("monitor");
let cart = document.getElementById("cart");

home.onclick = function (){
    alert("Thanks for testing my website but there is no link right here!")
}

monitor.onclick = function (){
    alert("Hm, this works too")
}

cart.onclick = function (){
    alert("Yeees, testing everything!")
}
