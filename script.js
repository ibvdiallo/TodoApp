let menu = document.getElementById("menu")
let side_bar = document.getElementById("side_bar")
const FERMER = "Fermer"
const OUVRIR = "Menu"
const TRANSITION = "all 400ms ease-in-out"

menu.addEventListener("click", () => {
    let content = document.getElementById("content")

    if (menu.textContent === FERMER) {
        menu.innerText = OUVRIR
        content.classList.replace("col-10", "col-12")
        side_bar.classList.replace("col-2", "col-0")
        side_bar.style.transition = TRANSITION
        content.style.transition = TRANSITION
    } else {
        menu.textContent = FERMER
        content.classList.replace("col-12", "col-10")
        side_bar.classList.replace("col-0", "col-2")
        side_bar.style.transition = TRANSITION
        content.style.transition = TRANSITION
    }
})