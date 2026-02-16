// option 02 for click event handle---->
function makeGreen() {
  document.body.style.backgroundColor = "green";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}
function makeBlack() {
  document.body.style.backgroundColor = "black";
}
function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option-03 getelement by id event handle---->

const makeBlue = document.getElementById("blue");
makeBlue.onclick = function btnBlue() {
  document.body.style.backgroundColor = "blue";
};
const btnPurple = document.getElementById("purple");
btnPurple.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

const btnyellow = document.getElementById("yellow");
btnyellow.onclick = function makeBtnYellow() {
  document.body.style.backgroundColor = "yellow";
};

// option 04 addeven lissener**********

document.getElementById("gold").addEventListener("click", function btnClick() {
  document.body.style.backgroundColor = "gold";
});
document.getElementById("gray").addEventListener("click", function () {
  document.body.style.backgroundColor = "gray";
});
