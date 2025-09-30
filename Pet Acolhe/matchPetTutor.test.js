const { Caracteristicas } = require("./caracteristicasBuscadas");
const { matchPetTutor } = require("./matchPetTutor");
const { Pet } = require("./pet");
const { Tutor } = require("./tutor");
const { tutores, pets } = require("./cadastroTutorPet");


describe("Testes da função matchPetTutor", () => {
    it("verificar disponibilidade de pet para um tutor", () => {
        expect(matchPetTutor(tutores[6])).toEqual(expect.arrayContaining([pets[10]]));
    })
})