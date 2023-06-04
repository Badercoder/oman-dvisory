// Toggle the menu visibility on clicking the menu icon
document.getElementById("menuIcon").addEventListener("click", function (event) {
  const menu = document.getElementById("menu");

  if (menu.classList.contains("hide")) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }

  // Stop event propagation to prevent triggering of the window click event below
  event.stopPropagation();
});

// Close the menu if a click is detected anywhere else in the window
window.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");

  // If the click event's target is not inside the menu, hide the menu
  if (!menu.contains(event.target) && !menu.classList.contains("hide")) {
    menu.classList.add("hide");
  }
});

// Close the menu if the 'Escape' key is pressed
window.addEventListener("keydown", function (event) {
  const menu = document.getElementById("menu");

  if (event.key === "Escape" && !menu.classList.contains("hide")) {
    menu.classList.add("hide");
  }
});
