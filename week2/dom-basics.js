//create paragraph
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

//add image
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

//add section, h2, and p
const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "DOM basics";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newP.innerText = ("This was added through JavaScript.");
newSection.appendChild(newP);

document.body.appendChild(newSection);

//or they could also be added like this: 
  //const newSection = document.createElement("section");
  //newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
  //document.body.appendChild(newSection);
