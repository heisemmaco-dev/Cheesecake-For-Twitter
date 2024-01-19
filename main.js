// the menu button
let menuButton = document.querySelector(".menue-btn-js");
let nav = document.querySelector("nav");
// add event listener to the button

menuButton.addEventListener("click", () => {
  //menuButton.classList.toggle('changeBtnImage')
  if (!nav.classList.contains("showMenu")) {
    nav.classList.add("showMenu");

    menuButton.classList.add("toggleImage");

    nav.classList.remove("slide-out");
    nav.classList.add("slide-in");
  } else {
    nav.classList.remove("slide-in");
    nav.classList.add("slide-out");

    menuButton.classList.remove("toggleImage");

    setTimeout(() => {
      nav.classList.remove("showMenu");
    }, 600);
  }
});

// tha auchor tag, i want to disappear when the anyone being clicked

let aTag = document.querySelectorAll("nav a");

aTag.forEach((anchorTAg) => {
  anchorTAg.addEventListener("click", () => {
    if (nav.classList.contains("showMenu")) {
      nav.classList.remove("slide-in");
      nav.classList.add("slide-out");

      menuButton.classList.remove("toggleImage");

      setTimeout(() => {
        nav.classList.remove("showMenu");
      }, 600);
    }
  });
});
