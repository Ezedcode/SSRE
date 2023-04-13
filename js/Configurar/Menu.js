let menu_candidato = document.getElementById("menu-candidato");
let menu_eleitor = document.getElementById("menu-eleitor");

let form_candidato = document.querySelectorAll(".form-candidato");
//let form_eleitor = document.querySelector(".form-eleitor");

let candidatos = document.getElementById("candidatos");
let eleitores = document.getElementById("eleitores");

let form = document.querySelector(".form");

menu_eleitor.classList.add("active");
candidatos.style.display = "none";

form_candidato.forEach((element) => {
    element.style.display = "none";
});

const showEleitores = () => {
    menu_candidato.classList.remove("active");
    menu_eleitor.classList.add("active");
    candidatos.style.display = "none";
    eleitores.style.display = "block";
    form_candidato.forEach((element) => {
        element.style.display = "none";
    });
    form.style.display = "none";
    //form_eleitor.style.display = "block";
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
    //form_eleitor.style.display = "none";
}

const showForm = () => {
    form.style.display = "flex";
}