import Utils from "./utils.js";

import imgKoreanDish from "/src/img/korean-dish.jpg";
import imgLeaf from "/src/img/leaf.svg";
import imgRocket from "/src/img/rocket.svg";
import imgSupport from "/src/img/support.svg";

export default class Home {
    constructor() {
        this.content = document.querySelector("#content");
    }

    createElements() {
        this.hero = Utils.createTag("div", "hero");
        this.heroImg = Utils.createTag("img", "hero-img");
        this.heroImg.src = imgKoreanDish;

        this.heroTitle = Utils.createTag("h1", "hero-title");
        this.heroTitle.innerHTML = `Comida casera,<br> saludable y <strong class="highlight">vegana</strong>.`;

        this.heroButtons = Utils.createTag("div","hero-buttons");
        this.heroButtons.innerHTML = `<button class="hightlight-button">Ver Menu</button><button class="neutral-button">Local Cerca</button>`;

        this.quickLinkImg = Utils.createTag("div","quick-link-img");

        this.quickLinkImg.append(
            Utils.createQuickImg(imgLeaf, "Fresco"),
            Utils.createTag("div", "line"),
            Utils.createQuickImg(imgRocket, "Rapido"),
            Utils.createTag("div", "line"),
            Utils.createQuickImg(imgSupport, "Soporte")
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