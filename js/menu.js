document.getElementsByClassName('menu')[0].addEventListener('click', showHideMenu)

document.getElementsByClassName('close-btn')[0].addEventListener('click', showHideMenu)

function showHideMenu() {
    document.getElementsByClassName('slide-out-menu')[0].classList.toggle('slide-out-menu-extended');
}