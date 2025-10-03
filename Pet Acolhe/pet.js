class Pet {
    idPet;
    raca;
    idade;
    porte;
    pelagem;
    sociavel;
    cor;
    sexo;
    localidade;
    filhote;
    disponivel;

    static petsCadastrados = [];

    constructor(idPet, raca, idade, porte, pelagem, sociavel, cor, sexo, localidade){
        this.idPet = idPet;
        this.raca = raca;
        this.idade = idade;

        if(idade < 12){
            this.filhote = true;

        } else{
            this.filhote = false;
        }
        this.porte = porte;
        this.pelagem = pelagem;
        this.sociavel = sociavel;
        this.cor = cor;
        this.sexo = sexo;
        this.localidade = localidade;
        this.disponivel = true;

        Pet.petsCadastrados.push(this);
    }

    
    cadastroPet(idPet, raca, idade, porte, pelagem, sociavel, cor, sexo, localidade) {
                if (typeof idPet !== "number" || idPet <= 0) {
            throw new Error("ID do pet inválido.");
        }
        if (typeof raca !== "string" || raca.trim() === "") {
            throw new Error("Raça inválida.");
        }

        if (typeof idade !== "number" || idade < 0) {
            throw new Error("Idade inválida.");
        }

        if (typeof porte !== "string" || !["pequeno", "médio", "grande"].includes(porte)) {
            throw new Error("Porte inválido. Use 'pequeno', 'médio' ou 'grande'.");
        }

        if (typeof pelagem !== "string" || !["curto", "médio", "longo"].includes(pelagem)) {
            throw new Error("Pelagem inválida. Use 'curto', 'médio' ou 'longo'.");
        }

        if (typeof sociavel !== "boolean") {
            throw new Error("Sociabilidade inválida. Use true ou false.");
        }

        if (typeof cor !== "string" || cor.trim() === "") {
            throw new Error("Cor inválida.");
        }

        if (typeof sexo !== "string"|| !["macho", "fêmea"].includes(sexo.toLowerCase())) {
            throw new Error("Sexo inválido. Use 'macho' ou 'fêmea'.");
        }

        if (typeof localidade !== "string" || localidade.trim() === "") {
            throw new Error("Localidade inválida.");
        }
            this.idPet = idPet;
            this.raca = raca;
            this.idade = idade;
            this.porte = porte;
            this.pelagem = pelagem;
            this.sociavel = sociavel;
            this.cor = cor;
            this.sexo = sexo;
            this.localidade = localidade;
            this.disponivel = true;
    
            return "Pet cadastrado com sucesso!";
        }

    contatoComOutrosPets() {
        if(this.sociavel === true) {
           return "Esse animal é sociável e pode ter contato com outros pets."
        } else {
            return "Esse animal NÃO é sociável. O ideal é que o Tutor não possua outros pets."
        }
    }
}


module.exports = { Pet }