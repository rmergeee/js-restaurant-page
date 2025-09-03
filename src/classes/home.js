import Utils from "./utils.js";

export default class Home {
    constructor() {
        this.content = document.querySelector("#content")
        this.ctu = new Utils();
    }

    createElements() {
        this.hero = this.ctu.createTag("div", "hero");
        this.heroTitle = this.ctu.createTag("h1", "hero-title");
        this.heroTitle.innerHTML = `Comida casera,<br> saludable y <strong class="highlight">vegana</strong>.`;
    }

    

    init() {
        this.createElements();
        this.content.className = "home-page";

    }
}