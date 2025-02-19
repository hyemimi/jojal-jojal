import loginPage from "./pages/login.js";
import registerPage  from "./pages/register.js";


const routes = {
    "/": loginPage,
    "/register": registerPage,
    // "/board": renderBoard,
    // "/post": renderPost,
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