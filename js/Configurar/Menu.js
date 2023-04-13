let menu_candidato = document.getElementById("menu-candidato");
let menu_eleitor = document.getElementById("menu-eleitor");

let candidatos = document.getElementById("candidatos");
let eleitores = document.getElementById("eleitores");

let form_eleitor = document.getElementById("form-candidato");

menu_candidato.classList.add("active");
candidatos.style.display = "block";

const showCandidatos = () => {
    menu_candidato.classList.add("active");
    menu_eleitor.classList.remove("active");
    candidatos.style.display = "block";
    eleitores.style.display = "none";
}

const showEleitores = () => {
    menu_candidato.classList.remove("active");
    menu_eleitor.classList.add("active");
    candidatos.style.display = "none";
    eleitores.style.display = "block";
}

const showFormEleitor = () => {
    form_eleitor.style.display = "flex";
}