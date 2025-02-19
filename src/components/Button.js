export function createButton({ text, onClick, className = "default-button", type = "button" }) {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add(className);
    button.type = type;

    if (onClick) {
        button.addEventListener("click", onClick);
    }

    return button;
}
