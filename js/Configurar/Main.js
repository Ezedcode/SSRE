import Eleitor from "./Eleitor.js"
import Candidato from "./Candidato.js";

const url_eleitor = 'http://localhost:3000/eleitor';
const url2_candidato = 'http://localhost:3000/candidato';

const btn_cadastrar = document.getElementById("btn-cadastrar");

btn_cadastrar.addEventListener("click", (e) => {
    e.preventDefault();
    const candidatos = document.getElementById("candidatos");
    const nome = document.getElementById('nome');
    const data_nascimento = document.getElementById('data-nascimento');
    const bi = document.getElementById('bi');
    const gender = document.querySelectorAll('.gender');
    const nif = document.getElementById('nif');

    const partidos = ["MPLA", "UNITA", "FNLA"];
    const genders = ["Homem", "Mulher"];

    const inputPartidos = document.querySelectorAll('.partido');
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const profissao = document.getElementById("profissao");

    if (candidatos.style.display == "block") {
        let candidato = new
            Candidato(nome.value, data_nascimento.value, bi.value, nif.value, email.value, phone.value, profissao.value);

        inputPartidos.forEach((partido, index) => {
            console.log(partido.checked);
            if (partido.checked) {
                candidato.setPartido(partidos[index]);
            }
        });

        gender.forEach((gendero, index) => {
            if (gendero.checked) {
                candidato.setGender(genders[index]);
            }
        });

        setCandidatoBD(candidato);
    } else {
        let eleitor = new Eleitor(nome.value, data_nascimento.value, bi.value, nif.value);

        gender.forEach((gendero, index) => {
            if (gendero.checked) {
                eleitor.setGender(genders[index]);
            }
        });

        setEleitorBD(eleitor);
    }
});

// mandar dados do eleitor na base de dados
async function setEleitorBD(eleitor) {
    const response = await fetch(url_eleitor, {
        method: "POST",
        body: JSON.stringify(eleitor),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(resp => {
        if (resp.ok) {
            alert('Cadastro feito com sucesso!');
        } else {
            alert('Falha no cadastro!');
        }
    });
}

// mandar dados do candidato na base de dados
async function setCandidatoBD(candidato) {
    const response = await fetch(url2_candidato, {
        method: "POST",
        body: JSON.stringify(candidato),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(resp => {
        if (resp.ok) {
            alert('Cadastro feito com sucesso!');
        } else {
            alert('Falha no cadastro!');
        }
    });
}

// get products on bd
async function getEleiresBD() {
    const response = await fetch(url_eleitor);
    const data = await response.json();

    const lista = document.getElementById("lista-eleitos");

    data.forEach((element) => {
        lista.innerHTML += `<li>${element.name}</li>`;
    })
}

async function getCandidatosBD() {
    const response = await fetch(url2_candidato);
    const data = await response.json();

    const lista = document.getElementById("lista-candidatos");;

    data.forEach((element) => {
        lista.innerHTML += `<li>${element.name}</li>`;
    })
}

getCandidatosBD()
getEleiresBD();

