console.log("js connected");
// const findSection = document.getElementById("section-container");
// const newContainer = document.createElement("ul");
// newContainer.innerHTML = `
// <li>MIM</li>
//     <li>Ahsan</li>
//     <li>Afiya</li>
// `;
// findSection.appendChild(newContainer);
// const newFind = document.createElement("h1");
// newFind.innerText = "Hello Bangladesh";
// const find = document.getElementById("section-conatiner");
// find.appendChild(newFind);
const oldBtn = document.getElementById("btn");
const newBtn = document.createElement("button");
newBtn.innerText = "see more";
oldBtn.appendChild(newBtn);

const oldSection = document.getElementById("section-conatiner");
const newSection = document.createElement("section");
newSection.innerHTML = `
<ul>
        <li>Hamim</li>
        <li>MIm</li>
</ul>
<p>i will passed one day </p>
`;
oldSection.appendChild(newSection);
