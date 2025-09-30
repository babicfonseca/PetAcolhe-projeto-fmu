const { Caracteristicas } = require("./caracteristicasBuscadas");

describe("Testes na classe Característica", () => {
    it("Verificar se as características são criadas corretamente", () => {
        const caracteristicaTutorBarbara = new Caracteristicas(true, "curta", "pequeno", false)
        expect(caracteristicaTutorBarbara.filhote).toBe(true);
        expect(caracteristicaTutorBarbara.pelagem).toBe("curta");
        expect(caracteristicaTutorBarbara.porte).toBe("pequeno");
        expect(caracteristicaTutorBarbara.sociavel).toBe(false);
    });
})