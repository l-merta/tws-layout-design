const navButtons = document.querySelectorAll("nav button");

switchIframe('design_steam', navButtons[0]); // Starting design
function switchIframe(name, button) {
  document.querySelector('iframe').src = name;
  setActiveButton(button);
}
function setActiveButton(button) {
  navButtons.forEach(b => {
    b.classList.remove("button-active");
  });
  button.classList.add("button-active");
}