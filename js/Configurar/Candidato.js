class Candidato {
    constructor(name, dataNas, BI, NIF, email, phone, profissao) {
        this.name = name;
        this.dataNas = dataNas;
        this.BI = BI;
        this.NIF = NIF;
        this.email = email;
        this.phone = phone;
        this.profissao = profissao;
    }

    setPartido(partido) {
        this.partido = partido;
    }

    setGender(genero) {
        this.genero = genero;
    }
}


export default Candidato;