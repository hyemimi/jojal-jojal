
import BoardDetailPage from "./pages/BoardDetailPage/index.js";
import BoardListPage from "./pages/BoardListPage/index.js";
import LoginPage from "./pages/LoginPage/index.js";
import PostPage from "./pages/PostPage/index.js";
import ProfilePage from "./pages/ProfilePage/index.js";
import RegisterPage from "./pages/RegisterPage/index.js";

const routes = {
    "/": LoginPage,
    "/register": RegisterPage,
    "/boards": BoardListPage,
    "/post" : PostPage,
    "/boardDetail/:id" : BoardDetailPage,
    "/profile" : ProfilePage
};

export function navigateTo(path) {
    window.history.pushState({}, "", path);
    renderPage();
}

export function renderPage() {
    const path = window.location.pathname || "/"; // 현재 브라우저 URL 가져오기
    document.getElementById("app").innerHTML = ""; // 기존 페이지 내용 초기화

    let matchedRoute = null; // 현재 URL과 일치하는 경로
    let params = {}; // 동적 파라미터 저장 객체 (예: { id: "5" })

    for (const route in routes) {
        // 정규표현식을 이용해 동적 경로를 변환
        const routeRegex = new RegExp(`^${route.replace(/:\w+/g, "(\\w+)")}$`);
        const match = path.match(routeRegex);

        if (match) {
            matchedRoute = routes[route]; // 일치하는 페이지 함수 저장
            const paramKeys = (route.match(/:(\w+)/g) || []).map(key => key.substring(1)); 

            paramKeys.forEach((key, index) => {
                params[key] = match[index + 1]; // { id: "1" }처럼 실제 값 저장
            });

            break; // 첫 번째로 일치하는 경로를 찾으면 반복문 종료
        }
    }

    if (matchedRoute) {
        matchedRoute(params); // 📌 페이지 함수 실행 + 동적 파라미터 전달
    } else {
        LoginPage(); // 기본 페이지로 이동
    }
}

window.addEventListener("popstate", renderPage); // 뒤로 가기