const { Caracteristicas } = require("./caracteristicasBuscadas");
const { Tutor } = require("./tutor");
const { tutores, pets } = require("./cadastroTutorPet");

describe("Testes na classe Tutor", () => {
    it("Verificar criação do Tutor no sistema com dados válidos", () => {
        const caracteristicasBarbara = new Caracteristicas(12, "longo", "médio", true);
        const tutorBarbara = new Tutor("Bárbara", 27, "61999885688", "barbara@reprograma.com.br", "São Paulo - SP", false, true, "suporte emocional", caracteristicasBarbara)
        expect(tutorBarbara.nome).toBe("Bárbara");
        expect(tutorBarbara.idade).toBe(27);
        expect(tutorBarbara.email).toBe("barbara@reprograma.com.br");
        expect(tutorBarbara.alergiaAPelo).toBe(false);
    });

    it("Verificar se criação do Tutor no sistema com dados inválidos/incompletos retorna erro", () => {
        const tutorBarbara = new Tutor()
        const caracteristicasBarbara = new Caracteristicas(12, "longo", "médio", true);
        expect(() => tutorBarbara.cadastroTutor("Bárbara", 27, "61999885688", "barbara@reprograma.com.br", "São Paulo - SP", false, true, "suporte emocional", caracteristicasBarbara)).toThrow("Erro no cadastro, dados inválidos");
    });

    it("Verificar se adoção por menores de 18 anos retorna erro", () => {
        const tutorMalu = new Tutor("Maria Luiza", 7, "61999880000", "malu@reprograma.com.br", "Brasília - DF", false, false, "suporte emocional")
        expect(() => tutorMalu.maioridade("Maria Luiza", 7, 200, "61999880000", "malu@reprograma.com.br", "Brasília - DF", false, "apartamento", false, 19, "suporte emocional")).toThrow("A adoção de animais para suporte emocional deve ser realizada por maiores de 18 anos.");
    });

    it("Verificar se o tutor é idoso", () => {
        const caracteristicaBruno = new Caracteristicas(false, "curta", "médio", false, "macho");
        const tutorBruno = new Tutor("Bruno", 72, "61999880001", "bruno@reprograma.com.br", "Brasília - DF", false, false, "suporte emocional", caracteristicaBruno)
        const tutorBarbara = new Tutor("Bárbara", 27, "61999885688", "barbara@reprograma.com.br", "São Paulo - SP", false, true, "suporte emocional")
        expect(tutorBruno.idoso).toBe(true);
        expect(tutorBarbara.idoso).toBe(false);
    });

})