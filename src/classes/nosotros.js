import Utils from "./utils.js";

import cook1 from "/src/img/cook-1.jpg";
import cook2 from "/src/img/cook-2.jpg";
import cook3 from "/src/img/cook-3.jpg";

import img1 from "/src/img/akar-icons_instagram-fill-blue.svg";
import img2 from "/src/img/logos_linkedin-icon.svg";
import img3 from "/src/img/logos_twitter.svg";

export default class Nosotros {

    constructor() {
        this.content = document.querySelector("#content");
    }

    createElements() {
        this.expertos = Utils.createTag("div", "expertos");
        this.expertos.textContent = "Expertos";

        this.title = Utils.createTag("h2", "h2-title");
        this.title.textContent = "Nuestra Cosina";

        this.cooksImg = [
            {src:cook1, name: "Rodrigo Russo", pos: "Chief"},
            {src:cook2, name: "Maria Olivos", pos: "Chief"},
            {src:cook3, name: "Fabiano Caruana", pos: "Fundador"}
        ]

        this.socialImg = [img1, img2, img3];
        
        this.cooks = Utils.createTag("div", 'cooks');

        this.cooksImg.forEach((cook) => {
            this.cooks.append(
                Utils.createCookCard(cook, this.socialImg)
            )
        })
    }

    init() {
        this.createElements();
        this.content.textContent = "";
        this.content.className = "nosotros";
        this.content.append(this.expertos, this.title, this.cooks)
    }
}