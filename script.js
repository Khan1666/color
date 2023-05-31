let box = document.querySelector(".box")
let color = ["orange","red","green","blue","yellow","purple","black","pink","violet","silver"];

let button = document.querySelector("button");

button.addEventListener("click", function () {
   let randomColor = color[Math.floor(Math.random()*color.length)];
   console.log(randomColor);
//    console.log(Math.random()*color.length);
   box.style.background = randomColor;
});
