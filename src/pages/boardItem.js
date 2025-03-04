import Button from "../components/Button.js";
import { navigateTo } from "../router.js";

export default function boardItemPage (params) {
    const app = document.getElementById("app");
    console.log(params)

    app.innerHTML = `
         <div class="boardItem-container">
            <h2 class="boardItem-title">제목 1</h2>
            <div class="boardItem-meta">
            <div class= "boardItem-meta-div">
                <div class="boardItem-profile-placeholder"></div>
                <span class="boardItem-author">더미 작성자</span>
                <span class="boardItem-date">2021-01-01 00:00:00</span>
            </div>
            <div class ="boardItem-button-div">
                <button class="boardItem-edit-button">수정</button>
                <button class="boardItem-edit-button">삭제</button>
            </div>
                </div>
            <hr class="boardItem-hr"/>
            <div class="boardItem-img"></div>
            <p class="post-content">이것은 더미 게시글 내용입니다.</p>
            <div class="post-stats">
                <div class="stat-item"><strong>123</strong> 좋아요수</div>
                <div class="stat-item"><strong>123</strong> 조회수</div>
                <div class="stat-item"><strong>123</strong> 댓글</div>
            </div>
            <hr class="boardItem-hr"/>
            <div class="comment-section">
                <textarea class="comment-input" placeholder="댓글을 남겨주세요!"></textarea>
                <div class="comment-button-div"></div>
            </div>
            <div class="comment-list" id="comment-list"></div>
        </div>
    `;

    const comments = [
        { id: 1, author: "더미 작성자 1", date: "2025-02-20 12:30", text: "첫 번째 댓글입니다." },
        { id: 2, author: "더미 작성자 2", date: "2025-02-19 15:45", text: "두 번째 댓글입니다." },
        { id: 3, author: "더미 작성자 3", date: "2025-02-18 10:20", text: "세 번째 댓글입니다." }
    ];

    const commentList = document.getElementById("comment-list");
    comments.forEach(comment => {
        const commentItem = document.createElement("div");
        commentItem.classList.add("comment-item");
        commentItem.innerHTML = `
            <div class="comment-meta">
             <div class= "boardItem-meta-div">
                <div class="boardItem-profile-placeholder"></div>
                <span class="boardItem-author">${comment.author}</span>
                <span class="boardItem-date">${comment.date}</span>
            </div>
             <p class="comment-text">${comment.text}</p>
            </div>
           
        `;
        commentList.appendChild(commentItem);
    });


    const commentButton = Button({
        text: '댓글 등록',
        onClick: () => {console.log('댓글 작성');}
        ,
        className: "comment-button"
    })

    const commentButtonDiv = document.querySelector(".comment-button-div");
    commentButtonDiv.appendChild(commentButton);

}