import Button from "../components/Button.js";

export default function profilePage () {
    const app = document.getElementById("app");
    app.innerHTML = `
    <div class="profile-container">
        <h2>회원정보수정</h2>
        <p>프로필 사진*</p>
        <div class="profile-picture-div">
            <div class="profile-picture">
                <button class="profile-change-btn">변경</button>
            </div>
        </div>

        <form class="profile-form">
            <label>이메일</label>
            <input type="email" value="startupcode@gmail.com" disabled>

            <label>닉네임</label>
            <input type="text" value="스타트업코드">
        </form>
        <div class="profile-completed-button-div"></div>
    </div>
    `;

    const ProfileCompletedButtonDiv = document.querySelector(".profile-completed-button-div");

    const profileCompletedButton = Button({
        text: "수정완료",
        onClick: () => {console.log('수정 완료')},
        className: "profile-completed-button"
    })

    const ProfileForm = document.querySelector(".profile-form");

    const EditButton = Button({
        text : "수정하기",
        onClick: () => {console.log(수정하기)}
    })
    const DeleteButton = Button({
        text : "회원탈퇴",
        onClick: () => {console.log(탈퇴하기)},
        className: "profile-deleted-btn"
    })

    ProfileForm.appendChild(EditButton)
    ProfileForm.appendChild(DeleteButton)
    ProfileCompletedButtonDiv.appendChild(profileCompletedButton)
}