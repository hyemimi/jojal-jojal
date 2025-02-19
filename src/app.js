// app.js
//import { renderHeader } from "./components/header.js";
import { renderPage } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
    //renderHeader();
    renderPage();
    window.addEventListener("popstate", renderPage);
});