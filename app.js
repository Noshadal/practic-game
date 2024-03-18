let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turno = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
   if(turno) {
    box.innerHTML = "X";
    console.log("boxes");
    turno = false;
    //colur black 
    box.style.color = "black";
}
else {
    box.innerHTML = "O";
    turno = true;
    box.style.color = "red";
}
box.disabled = true;
});
});
