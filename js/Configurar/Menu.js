let lCandidato = document.getElementById("lista-candidatos");
let lEleitor = document.getElementById("lista-eleitores");
let rCandidato = document.getElementById("registrar-candidato");
let rEleitor = document.getElementById("registrar-eleitor");

lCandidato.style.display = "block";

const showLCandidato = () => {
    lCandidato.style.display = "block";
    lEleitor.style.display = "none";
    rCandidato.style.display = "none";
    rEleitor.style.display = "none";
}

const showLEleitor = () => {
    lCandidato.style.display = "none";
    lEleitor.style.display = "block";
    rCandidato.style.display = "none";
    rEleitor.style.display = "none";
}

const showRCandidato = () => {
    lCandidato.style.display = "none";
    lEleitor.style.display = "none";
    rCandidato.style.display = "block";
    rEleitor.style.display = "none";
}

const showREleitor = () => {
    lCandidato.style.display = "none";
    lEleitor.style.display = "none";
    rCandidato.style.display = "none";
    rEleitor.style.display = "block";
}

