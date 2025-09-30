const { Caracteristicas } = require("./caracteristicasBuscadas");
const { Pet } = require("./pet");
const { Tutor } = require("./tutor");
const { tutores } = require("./cadastroTutorPet");


function matchPetTutor(tutor){
    let petsCadastradosFiltrados = Pet.petsCadastrados.filter(function (pet) {
        return pet.localidade === tutor.localidade &&
        pet.filhote === tutor.caracteristicasBuscadas.filhote &&
        pet.pelagem === tutor.caracteristicasBuscadas.pelagem &&
        pet.porte === tutor.caracteristicasBuscadas.porte &&
        pet.sociavel === tutor.caracteristicasBuscadas.sociavel
    }
    );

    return petsCadastradosFiltrados;
}

let listaFiltradaPets = matchPetTutor(tutores[6])
console.log(listaFiltradaPets)
if(listaFiltradaPets.lenght === 0) {
    console.log("Não há animais disponíveis para adoção com as características informadas.")
}

module.exports = { matchPetTutor }

//console.log(Pet.petsCadastrados)