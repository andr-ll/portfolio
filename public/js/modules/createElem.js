export default function createElem(elem, className = "", text = "") {
    const newElem = document.createElement(elem);
    if (className) newElem.className = className;
    newElem.textContent = text;
    return newElem
}