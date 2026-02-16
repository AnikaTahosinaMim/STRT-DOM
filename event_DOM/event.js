document.getElementById("btn").addEventListener("click", function () {
  console.log("click");
  const btnClick = document.getElementById("page");
  btnClick.innerText = "you visited the page sucessfully";
});
document.getElementById("btn-01").addEventListener("click", function () {
  // console.log("btn click")
  const btnEat = document.getElementById("eat");
  btnEat.innerHTML = `
<h1> complete eat </h>
 `;
});

// set event handle
document.getElementById("update-btn").addEventListener("click", function () {
  console.log("click");
  // got text from input fild
  const inputText = document.getElementById("name");
  const name = inputText.value;
  console.log("name", name);
  // set the name
  const updateName = document.getElementById("nameP");
  updateName.innerText = name;
});

document.getElementById("btn-write").addEventListener("click", function () {
  // console.log('click')
  // set input
  const fild = document.getElementById("inpur");
  const setName = fild.value;
  const writeBox = document.getElementById("h-04");
  writeBox.innerText = setName;
});
document.getElementById("write").addEventListener("click", function () {
  console.log("click btn");
  const inputFiled = document.getElementById("filed");
  // console.log("name")
  let nameHERE = inputFiled.value;
  console.log(nameHERE);
  const hname = document.getElementById("name");
  hname.innerText = nameHERE;
});
