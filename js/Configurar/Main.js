import Eleitor from "./Eleitor.js"
import Candidato from "./Candidato.js";

const btn_cadastrar = document.getElementById("btn-cadastrar");
const candidatos = document.getElementById("candidatos");
const tipo_eleicao = document.getElementById("tipo-eleicao");
let candidato = new Candidato();
let eleitor = new Eleitor();

tipo_eleicao.innerText = sessionStorage.getItem("eleicao-name").toUpperCase();
btn_cadastrar.addEventListener("click", (e) => {
    e.preventDefault();
    if (candidatos.style.display == "block") {
        let candidato = new Candidato();
        candidato.setCandidatoBD();
    } else {
        let eleitor = new Eleitor();
        eleitor.setEleitorBD();
    }
});


candidato.getCandidatosBD();
eleitor.getEleitoresBD();

