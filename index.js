let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    list.innerHTML += `<li>${item.value}</li>`;
    item.value = "";
});

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("checked")) {
        e.target.remove();    
    } else {
        e.target.classList.add("checked");
    }
})