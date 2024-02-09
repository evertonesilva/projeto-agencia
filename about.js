class MobileNavBar{
    constructor(faBar, navList, navLinks) {
        this.faBar = document.querySelector(faBar);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.faBar.addEventListener("click", this.handleClick);
    }
    
    init() {
        if (this.faBar){
            this.addClickEvent();
    
        }
        return this;
    }
}

const faBar = new MobileNavBar(
    ".fa-bars",
    ".nav-container",
    ".nav-container li"
);

faBar.init();