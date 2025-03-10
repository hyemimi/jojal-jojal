import Button from "../../components/Button.js";
import { navigateTo } from "../../router.js";

export default function RegisterPage() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <div class="register-container">
            <h2>회원가입</h2>
            <form class="register-form">
                <label>프로필 사진</label>
                <input type="file" class="profile-upload">

                <label>이메일*</label>
                <input type="email" placeholder="이메일을 입력하세요">

                <label>비밀번호*</label>
                <input type="password" placeholder="비밀번호를 입력하세요">

                <label>비밀번호 확인*</label>
                <input type="password" placeholder="비밀번호를 다시 입력하세요">

                <label>닉네임*</label>
                <input type="text" placeholder="닉네임을 입력하세요">

                <div id="button-container"></div>
            </form>
            <p>이미 계정이 있으신가요? <a href="/" id="login-link">로그인</a></p>
        </div>
    `;

    // 버튼 생성 및 추가
    const registerButton = Button({
        text: "회원가입",
        onClick: (e) => {
            e.preventDefault();
            alert("회원가입이 완료되었습니다.");
            navigateTo("/");
        },
    });
    document.getElementById("button-container").appendChild(registerButton);
    document.getElementById("register-btn").addEventListener("click", (e) => {
        e.preventDefault();
        alert("회원가입이 완료되었습니다.");
        navigateTo("/");
    });

    document.getElementById("login-link").addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo("/");
    });
}
