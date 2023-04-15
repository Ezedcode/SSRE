const url = 'http://localhost:3000/candidato';

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

    async setCandidatoBD() {
        const candidato = {
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
        const lista = document.getElementById("lista-candidatos");
        data.forEach((element) => {
            lista.innerHTML += `<li>${element.nome}</li>`;
        })
    }
}


export default Candidato;