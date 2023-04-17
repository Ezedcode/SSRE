const url = [
    "http://localhost:3000/eleicao-presidencial",
    "http://localhost:3000/eleicao-parlamentar",
    "http://localhost:3000/eleicao-municipal",
    "http://localhost:3000/eleitor"
];


const getPercentagemVotos = async (votos) => {
    const response = await fetch(url[3]);
    const data = await response.json();
    let totalVotos = 0;

    data.forEach(() => {
        totalVotos++;
    });


    return parseFloat(votos * (100 / totalVotos)).toFixed(2);
}


const getDadosBD = async (url, tabela, id) => {
    const response = await fetch(url);
    const data = await response.json();
    const lista = document.querySelector(tabela);

    data.forEach(async (element) => {
        const tr = document.createElement("tr")

        tr.innerHTML = `
            <td>
                ${element.nome}
            </td>
            ${id == 1
                ? `
                    <td>${element.partido}</td>
                    <td>${await getPercentagemVotos(element.votos)}%</td>
                `
                : `
                    <td>${element.bi}</td>
                    <td>${element.presidencial ? "Votou" : "Não Votou"}</td>
                    <td>${element.parlamental ? "Votou" : "Não Votou"}</td>
                    <td>${element.municipal ? "Votou" : "Não Votou"}</td>
                `}
        `;
        lista.appendChild(tr);
    });
}

const getVencedor = async (url, title) => {
    const response = await fetch(url);
    const data = await response.json();
    let vencedor = [];

    data.forEach((candidato) => {
        vencedor.push({
            nome: candidato.nome,
            partido: candidato.partido,
            votos: candidato.votos
        });
    });

    vencedor.sort(function (a, b) {
        return b.votos - a.votos;
    });

    const showVencedor = document.getElementById(title);
    //showVencedor.innerText = `${}`;
    console.log(vencedor);
}

getDadosBD(url[0], ".tabela1", 1);
getDadosBD(url[1], ".tabela2", 1);
getDadosBD(url[2], ".tabela3", 1);
getDadosBD(url[3], ".tabela4", 0);

getVencedor(url[0]);
