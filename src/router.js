import boardPage from "./pages/board.js";
import loginPage from "./pages/login.js";
import registerPage  from "./pages/register.js";


const routes = {
    "/": loginPage,
    "/register": registerPage,
    "/board": boardPage
};

export function navigateTo(path) {
    window.history.pushState({}, "", path);
    renderPage();
}

export function renderPage() {
    const path = window.location.pathname || "/";
    document.getElementById("app").innerHTML = "";
    (routes[path] || loginPage)();
}

window.addEventListener("popstate", renderPage);