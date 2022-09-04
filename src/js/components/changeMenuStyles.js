/* eslint-disable */
// change menu styles on burger click
export default function changeMenuStyles() {
  const body = document.body;
  const header = body.querySelector(".js-header");
  const opener = header.querySelector(".js-opener");
  const menu = header.querySelector(".js-menu");
  const menuActiveClass = "menu-active";
  const desktopWidth = 1024;

  opener.addEventListener('click', () => {
    if (window.innerWidth < desktopWidth) {
      if (body.classList.contains(menuActiveClass)) {
        body.classList.remove(menuActiveClass);
        toggleMenuStyles();
      } else {
        body.classList.add(menuActiveClass);
        toggleMenuStyles();
      }
    } else {
      if (body.classList.contains(menuActiveClass)) {
        body.classList.remove(menuActiveClass);
        toggleMenuStyles();
      }
    }
  });

  body.addEventListener('onShow', toggleMenuStyles);
  body.addEventListener('onHide', toggleMenuStyles);

  function toggleMenuStyles() {
    if (window.innerWidth < desktopWidth) {
      menu.style.top = `${header.clientHeight}px`;
      menu.style.height = `calc(var(--full-viewport) - ${header.clientHeight}px`;
    } else if (
      window.innerWidth >= desktopWidth) {
      menu.style.top = "";
      menu.style.height = "";
    } 
  }

  window.addEventListener("resize", toggleMenuStyles, true);
  window.addEventListener("orientationchange", toggleMenuStyles, true);
}