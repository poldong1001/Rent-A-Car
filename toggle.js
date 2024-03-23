let arrowBtnMenu = document.getElementById("arrowBtnMenu");
let menuIcon = document.getElementById("menuIcon");

function toggleMenu() {
  if (getComputedStyle(arrowBtnMenu).display === "flex") {
    arrowBtnMenu.style.display = "none";
  } else {
    arrowBtnMenu.style.display = "flex";
  }
}

// let testClick = document.getElementById("testClick");
let hiddenBox = document.getElementById("hiddenBox");
// let hiddenBoxTwo = document.getElementById("hiddenBoxTwo");

function toggle() {
  if (getComputedStyle(hiddenBox).display === "flex") {
    hiddenBox.style.display = "none";
  } else {
    hiddenBox.style.display = "flex";
  }
}
