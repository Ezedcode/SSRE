export class Votante {
    constructor(name, dataNas, genero, BI, NIF, endereco) {
        this.name = name;
        this.dataNas = dataNas;
        this.BI = BI;
        this.genero = genero;
        this.NIF = NIF;
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
}


export default Votante;