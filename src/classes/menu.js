import Utils from "./utils.js";
import coffeImg from "/src/img/coffe.jpg"

export default class Menu {
    constructor() {
        this.content = document.querySelector("#content");
    }

    createElements() {
        this.h2Title = Utils.createTagWithText("h2", "h2-title", "Menu");
        this.expertos = Utils.createTagWithText("div", "expertos", "Veganisimo");

        this.gridMenu = Utils.createTag("div", "grid-menu");
        this.gridMenu.append(
            Utils.createTagWithText("h3", "coffes", "Desayuno"),
            Utils.createTagWithText("h3", "coffes", "Almuerzo"),
            Utils.createTagWithText("h3", "coffes", "Merienda")
        )

        const makeCards = (n) => Array.from({ length: n }, () =>
            Utils.createCoffeCard(coffeImg, "Cafe con Lache")
        );

        const makeDividers = (n) => Array.from({ length: n }, () =>
            Utils.createTag("hr", "menu-divider")
        );

        this.gridMenu.append(
            ...makeCards(3),
            ...makeDividers(3),
            ...makeCards(3),
            ...makeDividers(3),
            ...makeCards(3)
        );

    }

    init() {
        this.createElements();
        this.content.textContent = "";
        this.content.className = "menu";
        this.content.append(this.h2Title, this.expertos, this.gridMenu)
    }
}