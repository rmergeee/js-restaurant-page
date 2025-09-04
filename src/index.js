import "./css/styles.css";
import HomeContent from "./classes/home.js"

const homeContent = new HomeContent();

homeContent.init();

const homePage = document.querySelector("#resto");
homePage.addEventListener("click", () => homeContent.init())