// DOM Selection
// document.getElementById -> element
const judul = document.getElementById("judul");
// merubah warna text
judul.style.color = "red";
judul.style.backgroundColor = "#acc";
// mengganti text
judul.innerHTML = "John Doe";

// document.getElementByTagName() -> html collections
// melakukan perulangan terhadap tag yang di dipilih
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElements.className() -> html collections
const p1 = document.getElementsByClassName("h1")[0];
p1.innerHTML = "Ini dirubah dari javascript";

// document.querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2");
li2.style.backgroundColor = "orange";

// document.querySelectorAll()
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

// mengubah node:root
const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName("p")[0];
p4.style.backgroundColor = "orange";
