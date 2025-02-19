export function BoardItem({ title, author, date, likes = 0, comments = 0, views = 0 }) {
    const postItem = document.createElement("div");
    postItem.classList.add("board-item");

    postItem.innerHTML = `
        <h3>${title}</h3>
        <div class="board-info-div">
            <p>좋아요 ${likes}  댓글 ${comments}  조회수 ${views}</p>
            <span class="board-date">${date}</span>
        </div>
        <hr class="board-divider" />
        <div class="board-footer">
            <div class="profile-placeholder"></div>
            <span class="board-author">${author}</span>
        </div>
    `;

    return postItem;
}