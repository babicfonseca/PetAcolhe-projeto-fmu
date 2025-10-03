const { Pet } = require("./pet");

class Tutor {
    nome;
    idade;
    idoso;
    #telefone;
    email;
    localidade;
    alergiaAPelo;
    possuiOutrosAnimais;
    motivoAdocao;
    caracteristicasBuscadas;

    static tutoresCadastrados = [];

    constructor(nome, idade, telefone, email, localidade, alergiaAPelo, possuiOutrosAnimais, motivoAdocao, caracteristicas) {
        this.nome = nome;
        this.idade = idade;

        if(idade >= 60){
            this.idoso = true;

        } else{
            this.idoso = false;
        }
        
        this.#telefone = telefone;
        this.email = email;
        this.localidade = localidade;
        this.alergiaAPelo = alergiaAPelo;
        if(this.alergiaAPelo === true) {
            if(caracteristicas.pelagem !== curto){
                throw new Error("Não é indicado pets de pelo longo para pessoas alérgicas.")
            }
        };

        this.possuiOutrosAnimais = possuiOutrosAnimais;
        this.motivoAdocao = motivoAdocao // suporte emocional. Seria só pra suporte emocional?
        this.caracteristicasBuscadas = caracteristicas;

        if(idade >= 60){
            if(caracteristicas.filhote === true){
                throw new Error("Não é indicado pets filhotes para pessoas de 60 anos ou mais.")
            }
        }

        Tutor.tutoresCadastrados.push(this);
    }

    get telefone() {
        return this.#telefone;
    }

    set telefone(telefone) {
        this.#telefone = telefone;
    }


    cadastroTutor(nome, idade, telefone, email, localidade, alergiaAPelo, possuiOutrosAnimais, motivoAdocao, caracteristicas) {
        
        if (typeof nome !== "string" || nome.trim() === "") {
            throw new Error("Nome inválido.");
        }

        if (typeof idade !== "number" || idade < 18) {
            throw new Error("Idade inválida. Tutor deve ser maior de 18 anos.");
        }

        if (typeof telefone !== "string"|| telefone.trim().length < 8) {
            throw new Error("Telefone inválido.");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (typeof email !== "string" || !emailRegex.test(email)) {
            throw new Error("Email inválido.");
        }

        if (typeof localidade !== "string"|| localidade.trim() === "") {
            throw new Error("Localidade inválida.");
        }

        if (typeof alergiaAPelo !== "boolean") {
            throw new Error("Campo de alergia a pelo inválida. Use true ou false.");
        }

        if (typeof possuiOutrosAnimais !== "boolean") {
            throw new Error("Campo de possuir outros animais inválida. Use true ou false.");
        }

        if (typeof motivoAdocao !== "string"|| motivoAdocao.trim() === "") {
            throw new Error("Motivo de adoção inválido.");
        }

        if (typeof caracteristicas !== "object"|| caracteristicas === null) {
            throw new Error("Características buscadas inválidas.");
        }

            this.nome = nome;   
            this.idade = idade;
            this.#telefone = telefone;
            this.email = email;
            this.localidade = localidade;
            this.alergiaAPelo = alergiaAPelo;
            this.possuiOutrosAnimais = possuiOutrosAnimais;
            this.motivoAdocao = motivoAdocao;
            this.caracteristicasBuscadas = caracteristicas;
                
            return "Tutor cadastrado";
        }
        

    maioridade() {
        if(this.idade <= 18) {
            throw new Error("A adoção de animais para suporte emocional deve ser realizada por maiores de 18 anos.")
        };
    }
}

module.exports = { Tutor };