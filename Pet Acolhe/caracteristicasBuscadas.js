const { Tutor } = require("./tutor");

class Caracteristicas {
    filhote;
    pelagem; 
    porte;
    sociavel;

    
    static caracteristicasBuscadas = []

    constructor(filhote, pelagem, porte, sociavel) {
        this.filhote = filhote;
        this.pelagem = pelagem;
        this.porte = porte;
        this.sociavel = sociavel;

        Caracteristicas.caracteristicasBuscadas.push(this);
    }
}

module.exports = { Caracteristicas }