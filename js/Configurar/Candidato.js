class Candidato {
    constructor(name, dataNas, genero, BI, NIF, profissao, partido) {
        this.name = name;
        this.dataNas = dataNas;
        this.BI = BI;
        this.genero = genero;
        this.NIF = NIF;
        this.partido = partido;
        this.contato = cotato;
        this.profissao = profissao;
    }

    getName() {
        return this.name;
    }

    getDataNas() {
        return this.dataNas;
    }

    getBI() {
        return this.BI;
    }

    getGenero() {
        return this.genero;
    }

    getNIF() {
        return this.NIF;
    }

    getPartido() {
        return this.partido;
    }

    getCotato() {
        return this.contato;
    }

    getProfissao() {
        return this.profissao;
    }
}


export default Candidato;