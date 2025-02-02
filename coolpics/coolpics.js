const menuButton = document.querySelector(".menubutton");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function viewerTemplate() {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="norris-full.jpeg" alt="norris full img">
    </div>`;
}

function viewHandler(event) {
  let element = event.target;

  let imgSrc = element.getAttribute("src");
  let imgPart = imgSrc.split("-");
  let newImg = imgPart[0] + "full.jpeg";

  document.body.insertAdjacentHTML("afterbegin",viewerTemplate(newImg));
  document.body.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer() {
  let viewer = document.querySelector(".viewer");
  if (viewer) {
    viewer.remove();
  }
}

let gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);
