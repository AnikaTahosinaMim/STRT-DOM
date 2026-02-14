// 01-getElement by tag name*************:
// const getElements = document.getElementsByTagName("h1")
// console.log(getElements)
// console.log(getElements[0])
// console.log(getElements[0].innerText)
// for (const element of getElements) {
//     console.log(element)
// }
// const getUlLiList = document.getElementsByTagName("li")
// console.log(getUlLiList)
// console.log(getUlLiList[0])
// console.log(getUlLiList[0].innerText)
// for(const ulLi of getUlLiList){
//     console.log(ulLi)
// }

//02 - getElements by id ***
const findId = document.getElementById("phara");
// console.log(findId.innerText)

// 03 - getElements by classname*****
const findClass = document.getElementsByClassName("title");
// console.log(findClass[0].innerText)
for (const find of findClass) {
  // console.log(find)
}

// 04 - quarryselector************


const findSelector = document.querySelector(".title");
// console.log(findSelector)

// 05- quarryselectorAll **********


// const findSelectorAll = document.querySelectorAll(".title");
// console.log(findSelectorAll);
// console.log(findSelectorAll.innerText);
// for (const selector of findSelectorAll) {
//   console.log(selector);
// }


