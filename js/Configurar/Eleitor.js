export class Eleitor {
    constructor(name, dataNas, BI, NIF) {
        this.name = name;
        this.dataNas = dataNas;
        this.BI = BI;
        this.NIF = NIF;
    }

    setGender(genero) {
        this.genero = genero;
    }
}


export default Eleitor;