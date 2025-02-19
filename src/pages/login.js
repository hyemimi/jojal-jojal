
import { Button } from "../components/Button.js";
import { navigateTo } from "../router.js";

export default function loginPage() {
    const app = document.getElementById("app");
    app.innerHTML = ""; // 기존 내용 초기화

    const container = document.createElement("div");
    container.classList.add("login-container");

    const title = document.createElement("h2");
    title.textContent = "로그인";

    const form = document.createElement("form");
    form.classList.add("login-form");

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "이메일";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "이메일을 입력하세요";

    const passwordLabel = document.createElement("label");
    passwordLabel.textContent = "비밀번호";
    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.placeholder = "비밀번호를 입력하세요";

    const submitButton = Button({
        text: "로그인",
        onClick: (e) => {
            e.preventDefault();
            navigateTo('/board')
        }
    })


    const registerLink = document.createElement("p");
    registerLink.innerHTML = `아직 회원이 아니신가요? <a href="/register" id="register-link">회원가입</a>`

    registerLink.addEventListener("click", (e) => {
        e.preventDefault(); // 기본 href 이동 방지
        navigateTo("/register");
    });

    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);
    
    container.appendChild(title);
    container.appendChild(form);
    container.appendChild(registerLink);

    app.appendChild(container);
}