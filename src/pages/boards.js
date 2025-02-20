import { BoardItem } from "../components/boardItem.js";
import Button  from "../components/Button.js";
import { navigateTo } from "../router.js";

export default function boardsPage () {
    const app = document.getElementById("app");
    app.innerHTML = `
        <div class="board-container">
            <p>안녕하세요,</p>
            <p>아무 말 대잔치 <strong>게시판</strong> 입니다. </p>
            <div id="board-button-div"></div>
            <div id="board-list" class="board-list"></div>
        </div>
    `;

    const uploadButton = Button({
        text : "게시글 작성",
        onClick : () => {
            navigateTo('/post')
        },
        className : "board-button"
    })

    const uploadButtonDiv = document.getElementById('board-button-div');
    uploadButtonDiv.appendChild(uploadButton);

     // 더미 데이터
     const boards = [
        { id: 1, title: "제목 1", author: "더미 작성자 1", date: "2025-02-20 12:30", likes: 10, comments: 5, views: 100 },
        { id: 2, title: "제목 2", author: "더미 작성자 2", date: "2025-02-19 15:45", likes: 3, comments: 2, views: 50 },
        { id: 3, title: "제목 3", author: "더미 작성자 3", date: "2025-02-18 10:20", likes: 7, comments: 1, views: 80 }
    ];

    const boardList = document.getElementById("board-list");
    boards.forEach(board => {
        const boardItem = BoardItem(board);
        boardList.appendChild(boardItem);
    });

}
