import boardItemPage from "./pages/boardItem.js";
import boardsPage from "./pages/boards.js";
import loginPage from "./pages/login.js";
import postPage from "./pages/post.js";
import registerPage  from "./pages/register.js";


const routes = {
    "/": loginPage,
    "/register": registerPage,
    "/boards": boardsPage,
    "/post" : postPage,
    "/boardItem" : boardItemPage
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