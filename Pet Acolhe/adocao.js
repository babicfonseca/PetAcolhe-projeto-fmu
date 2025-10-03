const {Pet} = require("./pet");
const {Tutor} = require("./tutor");

class Adocao {
    constructor(tutor,pet){
        this.tutor = tutor;
        this.pet = pet;
        this.dataAdocao = new Date();
        this.status = "concluída";
    }

    static historicoAdocoes = [];

    static registrarAdocao(tutor, pet) {
        if (pet.disponivel === false) {
            console.log(`O pet ${pet.id} já foi adotado.`);
            return null;
        }

        pet.disponivel = false;

        const novaAdocao = new Adocao(tutor, pet);
        Adocao.historicoAdocoes.push(novaAdocao);

        console.log(`Adoção registrada com sucesso! Tutor: ${tutor.nome} adotou Pet ID: ${pet.idPet} em ${novaAdocao.dataAdocao.toLocaleDateString()}.`);
        return novaAdocao;
    }

    static listaDeAdocoes(){
        return Adocao.historicoAdocoes;
    }
}

module.exports = {Adocao};