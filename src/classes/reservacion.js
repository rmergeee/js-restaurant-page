import Utils from "./utils.js";

export default class Reservacion {
    constructor() {
        this.content = document.querySelector("#content");
    }

    init() {
        this.content.textContent = "";
        this.content.className = "reservacion"
        this.content.innerHTML = 
        `<div class="background"></div>
        <form>
            <div class="expertos">Te Esperamos</div>
            <h2 class="h2-title">Reservacion</h2>
            <fieldset>
                <input type="number" name="nombre" id="nombre" placeholder="Nombre">
                <input type="email" name="email" id="email" placeholder="Email">
                <input type="number" name="telefono" id="telefono" placeholder="Telefono">
                <div>
                    <input type="text" name="fecha" id="fecha" placeholder="Fecha"><input type="text" name="hora" id="hora"
                        placeholder="Hora">
                </div>
                <input type="number" name="numberofpeople" id="numberofpeople" placeholder="Cantidad de Personas">
                <textarea name="message" id="message" placeholder="Mensaje"></textarea>
                <button type="submit" class="form-button">Encargar</button>
            </fieldset>
        </form>`
    }
}