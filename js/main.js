const fourMenus = document.querySelectorAll(".menu");
const menu = document.querySelector(".hamburger");
const menuBubble = document.querySelector(".talk-bubble");

console.log(fourMenus);

function menuToggle() {
  menuBubble.classList.toggle("hidden");
}

function showMenu() {
  if (window.innerWidth < 1000) {
    menu.classList.remove("hidden");
    fourMenus.forEach((element) => {
      element.classList.add("hidden");
    });
  } else {
    menu.classList.add("hidden");
    fourMenus.forEach((element) => {
      element.classList.remove("hidden");
    });
  }
}

window.addEventListener("resize", showMenu);
menu.addEventListener("click", menuToggle);