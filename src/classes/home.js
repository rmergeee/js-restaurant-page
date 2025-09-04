import Utils from "./utils.js";

import imgKoreanDish from "/src/img/korean-dish.jpg";
import imgLeaf from "/src/img/leaf.svg";
import imgRocket from "/src/img/rocket.svg";
import imgSupport from "/src/img/support.svg";

export default class Home {
    constructor() {
        this.content = document.querySelector("#content")
        this.ctu = new Utils();
    }

    createElements() {
        this.hero = this.ctu.createTag("div", "hero");
        this.heroImg = this.ctu.createTag("img", "hero-img");
        this.heroImg.src = imgKoreanDish;

        this.heroTitle = this.ctu.createTag("h1", "hero-title");
        this.heroTitle.innerHTML = `Comida casera,<br> saludable y <strong class="highlight">vegana</strong>.`;

        this.heroButtons = this.ctu.createTag("div","hero-buttons");
        this.heroButtons.innerHTML = `<button class="hightlight-button">Ver Menu</button><button class="neutral-button">Local Cerca</button>`;

        this.quickLinkImg = this.ctu.createTag("div","quick-link-img");

        this.quickLinkImg.append(
            this.ctu.createQuickImg(imgLeaf, "Fresco"),
            this.ctu.createTag("div", "line"),
            this.ctu.createQuickImg(imgRocket, "Rapido"),
            this.ctu.createTag("div", "line"),
            this.ctu.createQuickImg(imgSupport, "Soporte")
        )
    }

    

    init() {
        this.content.textContent = "";
        this.createElements();
        this.content.className = "home-page";
        this.content.append(this.hero, this.heroImg);
        this.hero.append(this.heroTitle, this.heroButtons, this.quickLinkImg);


    }
}