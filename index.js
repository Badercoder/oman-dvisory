document.getElementById("menuIcon").addEventListener("click", function () {
  const menu = document.getElementById("menu");

  if (menu.classList.contains("hide")) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
});
