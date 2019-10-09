document.getElementsByClassName('menu')[0].addEventListener('click', showHideMenu)

document.getElementsByClassName('close-btn')[0].addEventListener('click', showHideMenu)

function showHideMenu() {
    document.getElementsByClassName('slide-out-menu')[0].classList.toggle('slide-out-menu-extended');
}

class MenuItem{
    constructor(title) {
        this.title = title;
        this.container = document.createElement('div');
        this.p = document.createElement('p');
        this.icon = document.createElement('img');
        this.arrow = 'pathToArrow';
        this.childContainer = document.createElement('div');
        this.children = [];
    }

    setup() {
        this.container.classList.add('menu-item');
        this.childContainer.classList.add('menu-item-children');
        this.icon.setAttribute('src', this.arrow);
    }

    append(element) {
        element.appendChild(this);
    }

    toggle() {
        this.childContainer.classList.toggle('menu-item-')
    }
}