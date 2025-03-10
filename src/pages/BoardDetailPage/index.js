import Button from "../../components/Button.js";
import UserItem from "../BoardDetailPage/components/UserItem.js";
export default function BoardDetailPage (params) {
    
    const app = document.getElementById("app");
    console.log(params);

    app.innerHTML = `
         <div class="boardItem-container">
            <h2 class="boardItem-title">제목 1</h2>
            <div id="userItem"></div>
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

    const userItem = document.getElementById("userItem")
    userItem.appendChild(UserItem({nickname: "미", created_at : "2025-01-01 13:00", user_id: 1, profile_image: null}))


    /** 댓글 */
    const comments = [
        { user_id: 1, nickname: "더미 작성자 1", created_at: "2025-02-20 12:30", content: "첫 번째 댓글입니다." },
        { user_id: 2, nickname: "더미 작성자 2", created_at: "2025-02-19 15:45", content: "두 번째 댓글입니다." },
        { user_id: 3, nickname: "더미 작성자 3", created_at: "2025-02-18 10:20", content: "세 번째 댓글입니다." }
    ];

    const commentList = document.getElementById("comment-list");
    comments.forEach(comment => {
        commentList.appendChild(UserItem(comment));
        
        // 공통 컴포넌트(유저 항목)에 댓글 내용 추가 
        const commentContent = document.createElement("p")
        commentContent.classList.add("comment-content")
        commentContent.innerHTML = `<p>${comment.content}</p>`
        commentList.appendChild(commentContent)
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