// console.log("find filen");
// const find = document.getElementsByTagName('section')
const find = document.querySelectorAll("section");
for (const sec of find) {
  // console.log(find);
  // sec.style.backgroundColor = "aqua";
  // sec.style.border = "2px solid red";
  sec.classList.add("ul-div");
  // sec.classList.remove("ul-div");
}
console.log(find);
// document.getElementById("desh").childNodes[3];

// add html with js****************
// first creat html element:
const newChild = document.createElement("li");
newChild.innerText = "Apple is a good fruts";
// then addend the element:
const newList = document.getElementById("old-ul");
newList.appendChild(newChild);

const newPhara = document.createElement("p");

newPhara.innerText = "banladesh is our country..BNP is now Priminister";
const addNew = document.getElementById("old-ul");
addNew.appendChild(newPhara);
