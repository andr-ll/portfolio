const button = document.querySelector('button')

button.onclick = () => {
    let isRed = button.parentElement.style.backgroundColor;
    button.parentElement.style.backgroundColor = `${isRed ? "" : "red"}`;
}