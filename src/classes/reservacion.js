import Utils from "./utils.js";

export default class Reservacion {
    constructor() {
        this.content = document.querySelector("#content");
    }

    init() {
        this.content.textContent = "";
    }
}