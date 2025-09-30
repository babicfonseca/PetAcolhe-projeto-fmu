const { Pet } = require("./pet")

describe("Testes da classe Pet", () => {
    it("Verificar se o cadastro de pet é feito corretamente", () => {
        const pet1 = new Pet(1, "SRD", 10, "medio", "curta", true, "branco e marrom", "macho", "São Paulo - SP");
        expect(pet1.idade).toBe(10);
        expect(pet1.raca).toBe("SRD");
        expect(pet1.sociavel).toBe(true);
    });

    it("Verificar cadastro com dados incorretos", () => {
        const pet1 = new Pet();
        expect(() => pet1.cadastroPet(1, "SRD", 10, "médio", "curta", true, "branco e marrom", "macho", "São Paulo - SP")).toThrow("Erro no cadastro, dados inválidos");

    })

    it("Verificar se o pet é filhote", () => {
        const pet1 = new Pet(1, "SRD", 10, "medio", "curta", true, "branco e marrom", "macho", "São Paulo - SP");
        expect(pet1.filhote).toBe(true);
    });

    it("Verificar se o pet é adulto", () => {
        const pet2 = new Pet(2, "pastor alemão", 36, "medio", "curta", false, "preto e marrom", "fêmea", "Minas Gerais - MG");
        expect(pet2.filhote).toBe(false);
    });

    it("Verificar se o pet não é sociável", () => {
        const pet2 = new Pet(2, "pastor alemão", 36, "medio", "curta", false, "preto e marrom", "fêmea", "Minas Gerais - MG");
        expect(pet2.sociavel).toBe(false);
    });

    it("Verificar se o pet pode ter contato com outros pets", () => {
        const pet2 = new Pet(2, "pastor alemão", 36, "medio", "curta", false, "preto e marrom", "fêmea", "Minas Gerais - MG");
        expect(pet2.contatoComOutrosPets(false)).toBe("Esse animal NÃO é sociável. O ideal é que o Tutor não possua outros pets.")
    })
})

