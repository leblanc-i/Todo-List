let form = document.querySelector("form");

// On cree une stocker(Storage part)
function storeList() {
    window.localStorage.todoList = list.innerHTML;
}
// Creation de fonction pour recuperer les todos
function getTodos() {
    if (window.localStorage.todoList) {
        list.innerHTML = window.localStorage.todoList;
    } else {
        list.innerHTML = `<li>Veuillez ecrire votre liste des taches ci-dessus</li>`;
    }
}
window.addEventListener("load", () => {
    getTodos();
})
// On cree un evenement pour soumettre le formulaire
form.addEventListener("submit", (e) => {
    e.preventDefault();

    list.innerHTML += `<li>${item.value}</li>`;
    item.value = "";
    storeList();
});
// On cree un evenement au click sur la liste
list.addEventListener("click", (e) => {
    // on verifie si la classe checked est presente
    // Si oui on supprime l'element clické
    if (e.target.classList.contains("checked")) {
        e.target.remove();    
    } else {
        // Si non on lui ajoute la classe checked
        e.target.classList.add("checked");
    }
    storeList();
});