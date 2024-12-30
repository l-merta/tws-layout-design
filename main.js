const navButtons = document.querySelectorAll("nav button");

const pages = [
  {
    name: "Default",
    src: "_design"
  },
  {
    name: "Steam",
    src: "design_steam"
  },
  {
    name: "Fortnite",
    src: "design_fortnite"
  },
  {
    name: "Filmino",
    src: "design_filmino"
  },
]

//switchIframe(1); // Starting design
function switchIframe(index) {
  window.location.href = pages[index].src;
  /*
  document.title = pages[index].name + " - design";
  setFavicon("images/" + pages[index].name + "_icon_logo.png");
  const host = window.location.host; // Get the current host
  document.querySelector('iframe').src = `https://${host}/skola/design/${pages[index].src}`; // Force HTTPS
  setActiveButton(navButtons[index-1]);
  */
}
function setActiveButton(button) {
  navButtons.forEach(b => {
    b.classList.remove("button-active");
  });
  button.classList.add("button-active");
}
function setFavicon(src) {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
  }
  link.href = src;
}