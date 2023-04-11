export class Votante {
    constructor(name, age, BI) {
        this.name = name;
        this.age = age;
        this.BI = BI;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getBI() {
        return this.BI;
    }
}


export default Votante;