import "./css/styles.css";
import HomeContent from "./classes/home.js"
import Nosotros from "./classes/nosotros.js"

const nosotros = new Nosotros();
const home = new HomeContent();

home.init();

const homePage = document.querySelector("#resto");
homePage.addEventListener("click", () => home.init())

const nosotrosPage = document.querySelector("#nosotros");
nosotrosPage.addEventListener("click", () => home.init())