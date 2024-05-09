document.addEventListener("click", (event) => {
    if (event.target.innerText !== "Modifier") {
        console.log("Not found")
        return
    }

    const btn = event.target
    const tache_children = btn.parentElement.parentElement.children
    
    const input = document.getElementById("tache")
    
    const tache = tache_children[1]
    
    const id = tache_children[0]
    
    const idElement = document.createElement("input")
    idElement.value = id.innerText
    idElement.setAttribute("id", "id_courant")
    idElement.setAttribute("hidden", "hidden")
    
    document.getElementById("content").appendChild(idElement)

    tache.setAttribute("id", "tache_courante")
    
    input.value = tache.innerText
    
    document.getElementById("btn_ajouter").innerText = "Modifier tache"
})
