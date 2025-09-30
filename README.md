<h1 align="center">Sistema de adoção de pets para apoio emocional</h1>

<h1 align="center">EMOCIONEPET</h1>

</br>
<div align="center">
  <img width="300" height="300" src="./src/pet.png" alt="encontre o pet ideal"/>
</div>
</br>

Projeto Final do Curso de Imersão JavaScript - { reprograma }

# Introdução
Este projeto final está baseado em um dos objetivos de Desenvolvimento Sustentável no Brasil, qual seja: saúde e bem-estar.

É de conhecimento geral que, hoje em dia, mais da metade da população no Brasil sofre com transtornos mentais.
De acordo com os dados da Organização Mundial da Saúde (OMS), 86% dos brasileiros sofrem com algum tipo de transtorno mental, como ansiedade e depressão.

Um dos fatores que mais auxiliam na estabilização do transtorno, ou até em sua melhora, são os animais de apoio emocional. Eles atuam para fornecer conforto, apoio e segurança emocional ao tutor.

Os animais de apoio emocional não são considerados pets terapeutas, nem animais de serviço: seu principal papel é oferecer presença, companhia e afeto, ajudando a tranquilizar o tutor em diferentes momentos e também contribuindo para a independência da pessoa. Além disso, eles são capazes de ajudar o tutor a realizar atividades que ele tem dificuldade, como a prática de exercícios físicos ou viajar de avião, e até incentivar a interação com outras pessoas de maneira positiva, o que pode ajudar a melhorar o bem-estar emocional.

</br>


# Proposta do Projeto

Com base nisso, o presente projeto visa associar tutores que necessitem de pets de apoio emocional e os animais que estão disponíveis para adoção, dando um "match" com base nas características buscadas pelos tutores.

O projeto abarca apenas os animais da espécie cachorro, sendo presumido que todos são vacinados, castrados e vermifugados antes da adoção.

A EmocionePet é um sistema com os dados dos tutores e as características bsucadas em um pet e as características dos pets que estão disponíveis para adoção, inclusive a localidade que se encontra.



## Cadastro do Tutor

O tutor que está em busca de um pet de suporte emocional irá fazer um cadastro, preenchendo os seus dados e as características que busca em um pet.

Primeiro será necessário informar as características desejadas, utilizando a classe Características, quanto às seguintes questões: 
- filhote ("true" ou "false");
- pelagem ("curta" ou "longa");
- porte ("pequeno", "médio" ou "grande"); 
- sociável (caso não tenha preferência, coloque "false");
- sexo (macho ou fêmea);

Depois, deverá criar seu cadastro utilizando a classe "Tutor", informando:

- nome;
- idade; 
- telefone;
- email;
- localidade;
- alergia a pelo;
- possui outros animais; (importante para definir se o pet deve ser sociável ou não)
- motivo da adoção;
- caracteristicas buscadas;



Por exemplo:

``````
const caracteristicaTutor1 = new Caracteristicas(true, "curta", "grande", true);

const tutor1 = new Tutor("Bárbara", 27, "61999885688", "barbara@reprograma.com.br", "São Paulo - SP", false, true, "suporte emocional", caracteristicaTutor1);

``````

## Cadastro do Pet

O EmocionePet contará com o cadastro dos animais que estão disponíveis para adoção e que darão suporte emocional para os tutores. As informações necessárias são:

- id do Pet;
- raça;
- idade;
- porte;
- pelagem;
- sociável;
- cor;
- sexo;
- localidade;
- filhote;

Por exemplo:

````
const pet1 = new Pet(1, "SRD", 10, "médio", "curta", true, "branco e marrom", "macho", "São Paulo - SP");
````
</br>

# Detalhes técnicos

O projeto foi desenvolvido com técnicas de testes unitários, visando minimizar o risco de eventuais bugs, bem como técnicas de Clean Code para facilitar a leitura do código.

As tecnologias utilizadas foram: JavaScript e Jest.

## Classes Utilizadas


### Tutor

Para fazer o cadastro do tutor.

Importante destacar que os tutores idosos não podem escolher filhotes, tendo em vista que eles possuem mais energia, e as pessoas alérgicas só podem escolher animais de pelo curto.

Isso tudo para evitar que os tutores se arrependam da adoção e devolvam os animais.


```
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
            if(caracteristicas.idade < 12){
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
}
```

### Pet

Para fazer o cadastro dos pets disponíveis para adoção.

```
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

        Pet.petsCadastrados.push(this)
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

```

### Características

São as informações buscadas pelos tutores em um pet.

````
class Caracteristicas {
    filhote;
    pelagem; 
    porte;
    sociavel;

    
    static caracteristicasBuscadas = []

    constructor(filhote, pelagem, porte, sociavel) {
        this.filhote = filhote;
        this.pelagem = pelagem;
        this.porte = porte;
        this.sociavel = sociavel;

        Caracteristicas.caracteristicasBuscadas.push(this);
    }
}


````

## Como funciona o sistema?

Com base nas informações constantes nos cadastros dos tutores e dos pets, serão realizadas buscas de pets que estejam em conformidade com as características buscadas pelo tutor.

```
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

let listaFiltradaPets = matchPetTutor(tutores[0])
if(listaFiltradaPets.lenght === 0) {
    console.log("Não há animais disponíveis para adoção com as características informadas.")
}

```

## Testes Unitários

Foi utilizado o método de testes unitários para que fossem feitos testes em pequenas partes do sistema, evitando acúmulo de erros e dificuldade de consertá-los posteriormente.

Exemplo na classe Tutor:

</br>
<div align="center">
  <img width=100% src="./src/testesTutor.png" alt="testes pet"/>
</div>
</br>

Exemplo na classe Pet:

</br>
<div align="center">
  <img width=100% src="./src/testesPet.png" alt="testes pet"/>
</div>
</br>

Exemplo na classe Caracteristicas:

</br>
<div align="center">
  <img width=100% src="./src/testesCaracterísticas.png" alt="testes caracteristicas"/>
</div>
</br>

Exemplo na função matchPetTutor:

</br>
<div align="center">
  <img width=100% src="./src/testesMatch.png" alt="testes caracteristicas"/>
</div>
</br>