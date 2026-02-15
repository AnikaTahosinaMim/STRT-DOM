// option 02 for click event handle---->
function makeGreen() {
  document.body.style.backgroundColor = "green";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
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
