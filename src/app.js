// app.js
//import { renderHeader } from "./components/header.js";
import Header from "./components/header.js";
import { renderPage } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
    Header();
    renderPage();
});