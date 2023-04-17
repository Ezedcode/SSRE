const title = document.getElementById("title");
const tipoEleicao = document.querySelector('#tipo-eleicao');
const definir = document.getElementById("definir");

const url = [
    "http://localhost:3000/eleicao-presidencial",
    "http://localhost:3000/eleicao-parlamentar",
    "http://localhost:3000/eleicao-municipal"
];

title.innerText = (sessionStorage.getItem("title") != null) ? "CANDIDATOS " + sessionStorage.getItem("title") : "CANDIDATOS PRESIDENCIAL";

definir.addEventListener("click", (e) => {
    sessionStorage.setItem("title", tipoEleicao.value.toUpperCase());
    if (tipoEleicao.value.toLowerCase() == "presidencial") {
        sessionStorage.setItem("index", 0);
        sessionStorage.setItem("status", "presidencial");
    } else if (tipoEleicao.value.toLowerCase() == "parlamentar") {
        sessionStorage.setItem("index", 1);
        sessionStorage.setItem("status", "parlamentar");
    } else {
        sessionStorage.setItem("index", 2);
        sessionStorage.setItem("status", "municipal");
    }
});


const setEleitorStatusBD = async () => {
    const status1 = { presidencial: true };
    const status2 = { parlamental: true };
    const status3 = { municipal: true };

    // Define as opções da solicitação
    const options = {
        method: 'PATCH', // ou 'PATCH', dependendo do seu caso
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            (sessionStorage.getItem("status") == "presidencial")
                ? status1 : (sessionStorage.getItem("status") == "parlamentar")
                    ? status2 : status3
        )
    };

    // Faz a solicitação para a API
    fetch(`http://localhost:3000/eleitor/${sessionStorage.getItem("idEleitor")}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Dado atualizado com sucesso
        })
        .catch(error => {
            console.error(error); // Erro na atualização do dado
        });
}


const setVoto = async (id, votos) => {
    const voto = { votos: (votos + 1) };

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(voto)
    };

    fetch(`${sessionStorage.getItem("index") == null ? url[0] :
        url[sessionStorage.getItem("index")]}/${id}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}


const getCandidatosBD = async (id) => {
    const response = await fetch(
        sessionStorage.getItem("index") != null ?
            url[sessionStorage.getItem("index")]
            : "http://localhost:3000/eleicao-presidencial");
    const data = await response.json();
    const lista = document.querySelector("#lista-candidatos > tbody");

    data.forEach((element) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>
                ${element.nome}
            </td>
            <td>
                ${element.partido}
            </td>
        `;

        tr.setAttribute("value", element.id);
        tr.setAttribute("class", "candidato");
        tr.addEventListener("click", () => {
            setVoto(element.id, element.votos);
            setEleitorStatusBD();
            alert("Candidato Escolhido!");
        })
        lista.appendChild(tr);
    });
}


getCandidatosBD();