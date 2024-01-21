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

//form validation

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // get the input and textarea
  let nameInput = form.querySelector("input:first-child");
  let emailInput = form.querySelector(".Email");
  let textArea = form.querySelector("textarea");

  // get the small tag to display error message
  let nameErrorMessage = form.querySelector(".nameError");
  let emailErrorMessage = form.querySelector(".emailError");
  let textAreaErrorMessage = form.querySelector(".textareaError");

  if (nameInput.value.trim() === "") {
    nameInput.style.border = "1px solid red";
    nameErrorMessage.innerHTML = "Name cannot be empty";
    nameErrorMessage.style.color = "red";
  } else {
    nameInput.style.border = "none";
    nameErrorMessage.innerHTML = null;
  }

  if (emailInput.value.trim() === "") {
    emailInput.style.border = "1px solid red";
    emailErrorMessage.innerHTML = "Email cannot be empty";
    emailErrorMessage.style.color = "red";
  } else if (!validateEmail(emailInput)) {
    emailInput.style.border = "1px solid red";
    emailErrorMessage.innerHTML = "Looks like this is not an email";
    emailErrorMessage.style.color = "red";
  } else {
    emailInput.style.border = "none";
    emailErrorMessage.innerHTML = null;
  }

  if (textArea.value.trim() === "") {
    textArea.style.border = "1px solid red";
    textAreaErrorMessage.innerHTML = "Message cannot be empty";
    textAreaErrorMessage.style.color = "red";
  } else {
    textArea.style.border = "none";
    textAreaErrorMessage.innerHTML = null;
  }
});

function validateEmail(emailInput) {
  // Regular expression for a valid email pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  return emailRegex.test(emailInput);
}

//animation funtion

window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".when");

  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;

    let revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
