let head = document.getElementById("head")
let btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    head.innerText = "hy Professor";
    head.style.backgroundColor = "red";
})