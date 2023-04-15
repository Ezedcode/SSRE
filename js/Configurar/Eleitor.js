const url = 'http://localhost:3000/eleitor';

export class Eleitor {
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
    }

    async setEleitorBD() {
        const eleitor = {
            nome: this.nome,
            data_nascimento: this.data_nascimento,
            bi: this.bi,
            gender: this.gender,
            nif: this.nif,
        }
        console.log(eleitor);
        const response = await fetch(url, {
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

    async getEleitoresBD() {
        const response = await fetch(url);
        const data = await response.json();

        const lista = document.getElementById("lista-eleitores");

        data.forEach((element) => {
            lista.innerHTML += `<li>${element.nome}</li>`;
        })
    }
}


export default Eleitor;