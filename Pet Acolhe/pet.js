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

        Pet.petsCadastrados.push(this);
    }

    
    cadastroPet(idPet, raca, idade, porte, pelagem, sociavel, cor, sexo, localidade) {
        if(Pet instanceof Pet) {
            this.idPet = idPet;
            this.raca = raca;
            this.idade = idade;
            this.porte = porte;
            this.pelagem = pelagem;
            this.sociavel = sociavel;
            this.cor = cor;
            this.sexo = sexo;
            this.localidade = localidade;
    
            return "Pet cadastrado";
        } else {
            throw new Error("Erro no cadastro, dados inválidos");
        }
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