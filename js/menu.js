document.getElementsByClassName('menu')[0].addEventListener('click', showHideMenu)

document.getElementsByClassName('close-btn')[0].addEventListener('click', showHideMenu)

function showHideMenu() {
    document.getElementsByClassName('slide-out-menu')[0].classList.toggle('slide-out-menu-extended');
}

function create(element) {
    return document.createElement(element)
}

class MenuChild {
    constructor(title) {
        this.title = title;
        this.a = create('a');
        this.container = create('span');
    }

    setup() {
        this.a.innerText = this.title;
        this.a.classList.add('menu-child-title');
    }

    //Adds container to specified DOM element
    append(element) {
        element.appendChild(this.container);
    }

    removeFromDOM() {
        let parent = this.container.parentNode;
        parent.removeChild(this.container);
    }
}

class MenuParent extends MenuChild {
    constructor(title) {
        super(title);
        this.container = create('div');
        this.icon = create('span');
        //this.arrow = 'pathToArrow';
        this.childWrapper = create('div');
        this.children = [];
        this.childrenHidden = true;
    }

    //Arranges the elements within the container adds correct classes to all elements
    setup() {
        this.container.classList.add('menu-parent');
        this.childWrapper.classList.add('menu-parent-children');
        this.a.innerText = this.title;
        this.a.classList.add('menu-parent-title');
        //this.icon.setAttribute('src', this.arrow);
        this.icon.classList.add('menu-parent-arrow');
        this.container.appendChild(this.icon);
        this.container.appendChild(this.a);
        this.container.appendChild(this.childWrapper);

        this.icon.addEventListener('click', () => {
            this.toggle();
        })
    }

    //Removes element from DOM
    removeFromDOM() {
        let parent = this.container.parentNode;
        parent.removeChild(this.container);
    }

    toggle() {
        this.childWrapper.classList.toggle('menu-parent-children-show');
        this.icon.classList.toggle('menu-parent-arrow-show');
        if(this.childrenHidden) {
            let totalHeight = 0;
            this.children.forEach((child) => {

            })
            let computed = getComputedStyle(this.children[0].a).getPropertyValue('line-height').replace('px','');
            console.log(computed);
            this.childWrapper.style.height = this.children.length * computed + 200 + 'px';
            this.childrenHidden = false;
        } else {
            this.childWrapper.style.height = 0;
            this.childrenHidden = true;
        }
    }

    createChild(title) {
        let child = new MenuChild(title);
        child.setup();
        this.children.push(child);

        this.childWrapper.appendChild(child.a)
        //this.childWrapper.appendChild(create('br'));
    }
}

let items = [];
let categories =
    ['Skafferi', 'Träning & vikt',
        'Snacks & godis', 'Drycker',
        'Bröd, kex & kakor', 'Barn',
        'Husdjur', 'Vego',
        'Ekologiskt', 'Glutenfritt'];

let childTest = [
    'test',
    '123',
    'i am a child item',
    'wow i exist, thanks mom'
]

categories.forEach((category) => {
    let item = new MenuParent(category);
    item.setup();
    item.append(document.getElementsByClassName('menu-items')[0]);
    childTest.forEach((child) => {
        item.createChild(child);
    })
    let child = new MenuParent('test');
    child.setup();
    child.append(item.childWrapper);
    item.children.push(child);
    items.push(item);
})