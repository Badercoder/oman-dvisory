// Toggle the menu visibility on clicking the menu icon
document
  .getElementById("footerIcon")
  .addEventListener("click", function (event) {
    const menu = document.getElementById("footerList");

    if (menu.classList.contains("hide-footer")) {
      menu.classList.remove("hide-footer");
    } else {
      menu.classList.add("hide-footer");
    }

    // Stop event propagation to prevent triggering of the window click event below
    event.stopPropagation();
  });

// Close the menu if a click is detected anywhere else in the window
window.addEventListener("click", function (event) {
  const menu = document.getElementById("footerList");

  // If the click event's target is not inside the menu, hide the menu
  if (!menu.contains(event.target) && !menu.classList.contains("hide-footer")) {
    menu.classList.add("hide-footer");
  }
});

// Close the menu if the 'Escape' key is pressed
window.addEventListener("keydown", function (event) {
  const menu = document.getElementById("footerList");

  if (event.key === "Escape" && !menu.classList.contains("hide-footer")) {
    menu.classList.add("hide-footer");
  }
});
