const url = sessionStorage.getItem("url");

class Candidato {
    constructor() {
        this.nome = document.getElementById('nome').value;
        this.data_nascimento = document.getElementById('data-nascimento').value;
        this.bi = document.getElementById('bi').value;
        document.querySelectorAll('.gender').forEach((gendero, index) => {
            if (gendero.checked) {
                this.gender = (index == 0) ? "Homem" : "Mulher";
            }
        });
        this.nif = document.getElementById('nif').value;
        this.partido = document.getElementById('partido').value;
        this.phone = document.getElementById("phone").value;
        this.email = document.getElementById("email").value;
        this.profissao = document.getElementById("profissao").value;
    }

    validarInput() {
        let value = true;
        if (this.nome == "") value = false;
        if (this.data_nascimento == "") value = false;
        if (this.bi == "") value = false;
        if (this.nif == "") value = false;
        if (this.partido == "") value = false;
        if (this.phone == "") value = false;
        if (this.email == "") value = false;
        if (this.profissao == "") value = false;
        return value;
    }

    async setCandidatoBD() {
        const candidato = {
            votos: 0,
            status: false,
            nome: this.nome,
            data_nascimento: this.data_nascimento,
            bi: this.bi,
            gender: this.gender,
            nif: this.nif,
            partido: this.partido,
            phone: this.phone,
            email: this.email,
            profissao: this.profissao,
        }
        console.log(candidato);
        const response = await fetch(url, {
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

    async getCandidatosBD() {
        const response = await fetch(url);
        const data = await response.json();
        const lista = document.querySelector("#lista-candidatos > table");
        const idade = (data) => {
            let dataNas = data.split('-');
            let dataA = new Date();
            let dataAtual = dataA.toLocaleDateString().split('/');
            if (parseInt(dataAtual[1]) >= parseInt(dataNas[1]) && parseInt(dataAtual[0]) >= parseInt(dataNas[2])) {
                return parseInt(dataAtual[2]) - parseInt(dataNas[0]);
            }
            return parseInt(dataAtual[2]) - parseInt(dataNas[0]) - 1;
        }
        data.forEach((element) => {
            lista.innerHTML += `
            <tr>
                <td>
                    ${element.nome}
                </td>
                <td>
                    ${idade(element.data_nascimento)}
                </td>
                <td>
                    ${element.bi}
                </td>
                <td>
                    ${element.nif}
                </td>
                <td>
                    ${element.partido}
                </td>
                <td>
                    ${element.profissao}
                </td>
                <td>
                    ${element.gender}
                </td>
            </tr>
            `;
        });
    }
}


export default Candidato;