document.addEventListener("click", (event) => {
    if (event.target.innerText !== "Supprimer") {
        
        return
    }
    const tr = event.target.parentElement.parentElement
    const tacheValue = tr.children[1].innerText

    taches.splice(taches.findIndex(value=> tacheValue== value), 1)
    tr.remove()
})    