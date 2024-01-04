let show  = true;
const menuContent = document.querySelector(`.content`);
const menuTogle = menuContent.querySelector(`.menu-toggle`);

menuTogle.addEventListener(`click`,() => {
    menuContent.classList.toggle(`on`,show);
    show = !show;
});