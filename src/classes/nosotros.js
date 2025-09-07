import Utils from "./utils.js";

export default class Nosotros {
    constructor() {
        this.content = document.querySelector("#content");
    }

    init() {
        this.content.textContent = "";
    }
}