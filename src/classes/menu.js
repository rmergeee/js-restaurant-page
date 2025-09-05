import Utils from "./utils.js";

export default class Menu {
    constructor() {
        this.content = document.querySelector("#content")
        this.ctu = new Utils();
    }

    init() {
        this.content.textContent = "";
    }
}