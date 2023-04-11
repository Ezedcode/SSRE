import Votante from './Votante.js';

export class Candidato extends Votante {
    constructor(name, age, BI, namePartido) {
        super(name, age, BI);
        this.namePartido = namePartido;
    }

    getNamePartido() {
        return this.namePartido;
    }
}


export default Candidato;