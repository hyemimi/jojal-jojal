import Button from "../components/Button.js";
import { navigateTo } from "../router.js";

export default function postPage () {

    const app = document.getElementById("app");

    app.innerHTML =
    `
    <div class="post-container">
        <h2 class="post-title">게시글 작성</h2>
            <form id="post-form" class="post-form">
                <label for="title">제목*</label>
                <input type="text" id="title" placeholder="제목을 입력해주세요. (최대 26글자)" maxlength="26" required>

                <label for="content">내용*</label>
                <textarea id="content" placeholder="내용을 입력해주세요." required></textarea>

                <label for="image">이미지</label>
                <input type="file" id="image" accept="image/*">

                <div id="post-button-div"></div>
            </form>
    </div>
    `

    const postButton = Button({
        text : "완료",
        click: () => {navigateTo('/post')},

    })

    const postButtonDiv = document.getElementById("post-button-div")
    postButtonDiv.appendChild(postButton);

}