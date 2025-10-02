const { Caracteristicas } = require("./caracteristicasBuscadas");
const { Pet } = require("./pet");
const { Tutor } = require("./tutor");



// Lista de características buscadas e tutores cadastrados

const caracteristicaTutor1 = new Caracteristicas(true, "curta", "grande", true);
const tutor1 = new Tutor("Bárbara", 27, "61999885688", "barbara@reprograma.com.br", "São Paulo - SP", false, true, "suporte emocional", caracteristicaTutor1);

const caracteristicaTutor2 = new Caracteristicas(false, "longa", "médio", false);
const tutor2 = new Tutor("Maria Luiza", 7, "61999880000", "malu@reprograma.com.br", "Brasília - DF", false, false, "suporte emocional", caracteristicaTutor2);

const caracteristicaTutor3  = new Caracteristicas(true, "longa", "pequeno", true);
const tutor3 = new Tutor("Yan", 29, "61999885001", "yan@reprograma.com.br", "Vitória - ES", false, true, "companhia", caracteristicaTutor3);

const caracteristicaTutor4 = new Caracteristicas(false, "curta", "médio", false);
const tutor4 = new Tutor("Bruno", 72, "61999880001", "bruno@reprograma.com.br", "Minas Gerais - MG", false, false, "companhia", caracteristicaTutor4);

const caracteristicaTutor5 = new Caracteristicas(false, "longa", "pequeno", false);
const tutor5 = new Tutor("Anna Catarina", 35, "61999550001", "anna@reprograma.com.br", "Brasília - DF", false, false, "suporte emocional", caracteristicaTutor5);

const caracteristicaTutor6 = new Caracteristicas(false, "longa", "pequeno", false);
const tutor6 = new Tutor("Regina", 62, "61988550001", "regina@reprograma.com.br", "Brasília - DF", false, false, "suporte emocional", caracteristicaTutor6);

const caracteristicasTutor7 = new Caracteristicas(true, "curta", "médio", true);
const tutor7 = new Tutor("Aracyana", 40, 6155552222, "ara@reprograma.com.br", "Brasília - DF", false, false, "suporte emocional", caracteristicasTutor7);

// Lista de pets cadastrados

const pet1 = new Pet(1, "SRD", 10, "médio", "curta", true, "branco e marrom", "macho", "São Paulo - SP");
const pet2 = new Pet(2, "pastor alemão", 36, "grande", "curta", false, "preto e marrom", "fêmea", "Minas Gerais - MG");
const pet3 = new Pet(3, "SRD", 36, "pequeno", "curta", true, "preto", "fêmea", "Minas Gerais - MG");
const pet4 = new Pet(4, "SRD", 12, "médio", "curta", true, "marrom", "macho", "São Paulo - SP");
const pet5 = new Pet(5, "SRD", 24, "médio", "curta", false, "marrom e branco", "macho", "São Paulo - SP");
const pet6 = new Pet(6, "Husky Siberiano", 16, "grande", "longa", true, "cinza", "fêmea", "São Paulo - SP");
const pet7 = new Pet(7, "SRD", 20, "pequeno", "curta", true, "preto", "fêmea", "São Paulo - SP");
const pet8 = new Pet(8, "Labrador", 13, "grande", "curta", false, "caramelo", "fêmea", "Brasília - DF");
const pet9 = new Pet(9, "Poodle", 125, "pequeno", "longa", true, "branca", "fêmea", "Brasília - DF");
const pet10 = new Pet(10, "Pug", 6, "pequeno", "curta", true, "cinza", "macho", "Rio de Janeiro - RJ");
const pet11 = new Pet(11, "SRD", 8, "médio", "curta", true, "marrom", "fêmea", "Brasília - DF");

//console.log(Pet.petsCadastrados)
console.log(Tutor.tutoresCadastrados)

const tutores = [tutor1, tutor2, tutor3, tutor4, tutor5, tutor6, tutor7]
const pets = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11]

module.exports = {tutores, pets}