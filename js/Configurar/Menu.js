let menu_candidato = document.getElementById("menu-candidato");
let menu_eleitor = document.getElementById("menu-eleitor");

let form_candidato = document.querySelectorAll(".form-candidato");

let candidatos = document.getElementById("candidatos");
let eleitores = document.getElementById("eleitores");

let form = document.querySelector(".form");

let lista_eleitores = document.getElementById("lista-eleitores");
let lista_candidatos = document.getElementById("lista-candidatos");

let btn_cancelar = document.getElementById("btn-cancelar");

menu_eleitor.classList.add("active");
candidatos.style.display = "none";
lista_candidatos.style.display = "none";

form_candidato.forEach((element) => {
    element.style.display = "none";
});

btn_cancelar.addEventListener("click", () => {
    form.style.display = "none";
})

const showEleitores = () => {
    menu_candidato.classList.remove("active");
    menu_eleitor.classList.add("active");
    candidatos.style.display = "none";
    eleitores.style.display = "block";
    form_candidato.forEach((element) => {
        element.style.display = "none";
    });
    form.style.display = "none";
    lista_eleitores.style.display = "block";
    lista_candidatos.style.display = "none";
}

const showCandidatos = () => {
    menu_candidato.classList.add("active");
    menu_eleitor.classList.remove("active");
    candidatos.style.display = "block";
    eleitores.style.display = "none";
    form_candidato.forEach((element) => {
        element.style.display = "block";
    });
    form.style.display = "none";
    lista_eleitores.style.display = "none";
    lista_candidatos.style.display = "block";
}

const showForm = () => {
    form.style.display = "flex";
}