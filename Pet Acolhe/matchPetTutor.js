const { Caracteristicas } = require("./caracteristicasBuscadas");
const { Pet } = require("./pet");
const { Tutor } = require("./tutor");
const { tutores } = require("./cadastroTutorPet");


function matchPetTutor(tutor){
    return Pet.petsCadastrados.map(pet => {
        let score = 0;

        if (pet.localidade === tutor.localidade) score += 2;

        if(tutor.caracteristicasBuscadas.filhote === undefined || pet.filhote === tutor.caracteristicasBuscadas.filhote) score += 1;
        if(tutor.caracteristicasBuscadas.pelagem === undefined || pet.pelagem === tutor.caracteristicasBuscadas.pelagem) score += 1;
        if(tutor.caracteristicasBuscadas.porte === undefined || pet.porte === tutor.caracteristicasBuscadas.porte) score += 1;
        if(tutor.caracteristicasBuscadas.sociavel === undefined || pet.sociavel === tutor.caracteristicasBuscadas.sociavel) score += 1;

        return {pet, score};
    })
    .sort((a, b) => b.score - a.score)
    .filter(match => match.score > 0);
}

let listaFiltradaPets = matchPetTutor(tutores[6]);

if(listaFiltradaPets.length === 0) {
    console.log("Não há animais disponíveis para adoção com as características informadas.");
    } else {
        console.log("Pets compatíveis encontrados:");
        listaFiltradaPets.forEach(match => {
            console.log(`ID do Pet: ${match.pet.idPet}, Raça: ${match.pet.raca}, Idade: ${match.pet.idade} meses, Porte: ${match.pet.porte}, Pelagem: ${match.pet.pelagem}, Filhote: ${match.pet.filhote ? 'Sim' : 'Não'}, Sociável: ${match.pet.sociavel ? 'Sim' : 'Não'}, Localidade: ${match.pet.localidade} (Score de compatibilidade: ${match.score}`);
        });
    }    

module.exports = { matchPetTutor }