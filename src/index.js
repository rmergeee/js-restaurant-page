import "./css/styles.css";
import Home from "./classes/home.js"
import Nosotros from "./classes/nosotros.js"
import Menu from "./classes/menu.js";
import Reservacion from "./classes/reservacion.js";

const nosotros = new Nosotros();
const menu = new Menu();
const reservacion = new Reservacion();
const home = new Home();

reservacion.init();

const homePage = document.querySelector("#resto");
homePage.addEventListener("click", () => home.init())

const nosotrosPage = document.querySelector("#nosotros");
nosotrosPage.addEventListener("click", () => nosotros.init())

const menuPage = document.querySelector("#menu");
menuPage.addEventListener("click", () => menu.init())

const reservacionPage = document.querySelector("#reservacion");
reservacionPage.addEventListener("click", () => reservacion.init())