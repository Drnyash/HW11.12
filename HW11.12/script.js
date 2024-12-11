let box = document.getElementById("box");
let greenBtn = document.getElementById("greenBtn");
let resizeBtn = document.getElementById("resizeBtn");
let heightBtn = document.getElementById("heightBtn");

greenBtn.addEventListener("click", function() {
    box.style.backgroundColor = "green";
});

resizeBtn.addEventListener("click", function() {
    let qazirgiWidth = box.offsetWidth;
    box.style.width = (qazirgiWidth + 20) + "px";
});

heightBtn.addEventListener("click", function() {
    let qazirgiHeight = box.offsetHeight;
    box.style.height = (qazirgiHeight + 20) + "px";
});

box.addEventListener("mouseenter", function() {
    box.innerHTML = "Сіздің мышкаңыз қораптың ішінде!";
});

box.addEventListener("mouseleave", function() {
    box.innerHTML = "Сіздің мышкаңыз қораптан шығып кетті!";
});
