let btnAjouter = document.getElementById("btn_ajouter")
let listeTaches = document.getElementById("liste_taches")
const taches = []
let nbId = 0

btnAjouter.addEventListener("click", (event) => {
    if (event.target.innerText === "Modifier tache") {
        let tache = document.getElementById("tache")
        
        const tache_courante = document.getElementById("tache_courante")
        tache_courante.innerText = tache.value
        const id_courant = document.getElementById("id_courant")

        taches.splice(id_courant.value-1, 1, tache.value)

        tache.value = ""
        event.target.innerText = "Ajouter"
        tache_courante.removeAttribute("id")
        id_courant.remove()

        return
    }

    let tache = document.getElementById("tache")

    if (tache && tache.value.length > 0) {
        const existed = taches.find(t => t === tache.value)

        if (existed) {
            tache.value = ""
            return
        }

        const tr = createElement(++nbId, tache.value)
        listeTaches.appendChild(tr)
        taches.push(tache.value)
        tache.value = ""
    }
})

function createElement(tacheId, name) {
    let tr = document.createElement("tr")
    let id = document.createElement("td")
    id.innerText = tacheId

    let nom = document.createElement("td")
    nom.innerText = name

    let action = document.createElement("td")
    let btnSupprimer = document.createElement("button")
    btnSupprimer.classList.add("btn")
    btnSupprimer.classList.add("btn-sm")
    btnSupprimer.classList.add("btn-danger")
    btnSupprimer.innerText = "Supprimer"

    let btnModifier = document.createElement("button")
    const btnId = "btn_modifier_".concat(tacheId)
    btnModifier.setAttribute("id", btnId)
    btnModifier.classList.add("btn")
    btnModifier.classList.add("btn-sm")
    btnModifier.classList.add("btn-info")
    btnModifier.classList.add("me-2")
    btnModifier.innerText = "Modifier"

    action.appendChild(btnModifier)
    action.appendChild(btnSupprimer)
    action.classList.add("d-flex")
    action.classList.add("gap-2")
    tr.appendChild(id)
    tr.appendChild(nom)
    tr.appendChild(action)

    return tr
}