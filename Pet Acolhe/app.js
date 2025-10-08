// Classes Baseadas no seu GitHub para usar a lógica de Score
class Tutor {
    constructor(id, nome, localidade) {
        this.id = id;
        this.nome = nome;
        this.localidade = localidade;
    }
}

class Pet {
    constructor(idPet, nome, raca, idade, porte, pelagem, sociavel, localidade, disponivel = true) {
        this.idPet = idPet;
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
        this.porte = porte;
        this.pelagem = pelagem;
        this.sociavel = sociavel;
        this.localidade = localidade;
        this.disponivel = disponivel;
    }

    calcularScore(tutor) {
        let score = 0;
        
        if (this.localidade === tutor.localidade) {
            score += 10;
        }

        if (this.porte === 'pequeno') {
            score += 5;
        } else if (this.porte === 'médio') {
            score += 8;
        } else if (this.porte === 'grande') {
            score += 3;
        }

        if (this.sociavel) {
            score += 20;
        }
        
        return score;
    }
}

const tutores = [
    new Tutor(1, "Maria Silva", "SP"),
    new Tutor(2, "João Souza", "SP"),
    new Tutor(3, "Ana Costa", "RJ")
];

const pets = [
    new Pet(1, "Rex", "SRD", 24, "médio", "curto", true, "SP"),
    new Pet(2, "Mimi", "SRD", 6, "pequeno", "curto", true, "SP"),
    new Pet(3, "Thor", "SRD", 48, "grande", "curto", false, "RJ")
];

const historicoAdocoes = [];

const tutorSelect = document.getElementById("tutorSelect");
const petSelect = document.getElementById("petSelect");
const listaPets = document.getElementById("listaPets");
const historicoEl = document.getElementById("historico");
const form = document.getElementById("adocaoForm");
const mensagem = document.getElementById("mensagem");
const scoreDisplay = document.getElementById("scoreDisplay");


function atualizarScore() {
    const tutorId = tutorSelect.value;
    const petId = petSelect.value;

    const tutor = tutores.find(t => t.id === Number(tutorId));
    const pet = pets.find(p => p.idPet === Number(petId));

    if (tutor && pet) {
        const score = pet.calcularScore(tutor);
        
        let cor;
        if (score >= 30) {
            cor = 'green';
        } else if (score >= 20) {
            cor = 'orange';
        } else {
            cor = 'red';
        }

        scoreDisplay.innerHTML = `Compatibilidade: <span style="color: ${cor}">${score} de 38</span>`;
    } else {
        scoreDisplay.textContent = 'Selecione Tutor e Pet para ver a compatibilidade.';
    }
}

function popularTutores() {
    tutorSelect.innerHTML = "";
    tutores.forEach(t => {
        const opt = document.createElement("option");
        opt.value = t.id;
        opt.textContent = `${t.nome} (${t.localidade})`;
        tutorSelect.appendChild(opt);
    });
}

function popularPetsSelect() {
    petSelect.innerHTML = "";
    
    const tutorId = tutorSelect.value;
    const tutor = tutores.find(t => t.id === Number(tutorId));
    
    const defaultOpt = document.createElement("option");
    defaultOpt.value = "";
    defaultOpt.textContent = "Selecione um Pet";
    petSelect.appendChild(defaultOpt); 
    
    const petsDisponiveisComScore = pets
        .filter(p => p.disponivel)
        .map(p => {
            const score = tutor ? p.calcularScore(tutor) : 0;
            return { ...p, score };
        })
        .sort((a, b) => b.score - a.score); 

    petsDisponiveisComScore.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.idPet;
        
        let scoreText = p.score > 0 ? ` [Score: ${p.score}]` : "";
        if (!tutor) {
            scoreText = "";
        }
        
        opt.textContent = `${p.nome} — ${p.raca} — ${p.porte}${scoreText}`;
        petSelect.appendChild(opt);
    });
    
    atualizarScore(); 
}

function renderListaPets() {
    listaPets.innerHTML = "";
    
    const tutorId = tutorSelect.value;
    const tutor = tutores.find(t => t.id === Number(tutorId));

    pets.forEach(p => {
        const li = document.createElement("li");
        
        const score = tutor ? p.calcularScore(tutor) : 0;
        const scoreTag = score > 0 
            ? `<span class="tag score-tag score-${score > 30 ? 'high' : score > 20 ? 'medium' : 'low'}">Score: ${score}</span>` 
            : '';

        li.innerHTML = `<div>
            <strong>${p.nome}</strong> <small>(${p.raca})</small><br>
            <small>${p.porte} • ${p.pelagem} • ${p.localidade}</small>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            ${scoreTag}
            ${p.disponivel 
                ? '<span class="tag">Disponível</span>' 
                : `<span class="tag adotado-tag">Adotado</span>`
            }
          </div>`;
        listaPets.appendChild(li);
    });
}

tutorSelect.addEventListener("change", () => {
    popularPetsSelect();
    renderListaPets();
});



function renderHistorico() {
    historicoEl.innerHTML = "";
    historicoAdocoes.slice().reverse().forEach(reg => {
        const li = document.createElement("li");
        li.innerHTML = `<div><strong>${reg.pet.nome}</strong> adotado por <strong>${reg.tutor.nome}</strong></div>
            <div><small>${new Date(reg.dataAdocao).toLocaleDateString()}</small></div>`;
        historicoEl.appendChild(li);
    });
}

function registrarAdocao(tutorId, petId) {
    const tutor = tutores.find(t => t.id === Number(tutorId));
    const pet = pets.find(p => p.idPet === Number(petId));

    if (!tutor || !pet) throw new Error("Selecione um Tutor e um Pet válidos.");

    if (!pet.disponivel) {
        return { ok: false, mensagem: "Pet já foi adotado" };
    }

    pet.disponivel = false;
    const registro = { tutor, pet, dataAdocao: new Date(), status: "concluída" };
    historicoAdocoes.push(registro);
    return { ok: true, registro };
}


tutorSelect.addEventListener("change", atualizarScore);
petSelect.addEventListener("change", atualizarScore);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    mensagem.textContent = "";
    const tutorId = tutorSelect.value;
    const petId = petSelect.value;
    
    if (!tutorId || !petId) {
        mensagem.textContent = "Por favor, selecione tanto o Tutor quanto o Pet.";
        mensagem.style.backgroundColor = "#ffeceb";
        mensagem.style.color = "#c73b3b";
        return;
    }

    try {
        const res = registrarAdocao(tutorId, petId);
        
        if (!res.ok) {
            mensagem.textContent = res.mensagem;
            mensagem.style.backgroundColor = "#ffeceb";
            mensagem.style.color = "#c73b3b";
            return;
        }

        mensagem.textContent = `Adoção de ${res.registro.pet.nome} registrada com sucesso!`;
        mensagem.style.backgroundColor = "#e6ffe6";
        mensagem.style.color = "#2db27a";
        
        popularPetsSelect();
        renderListaPets();
        renderHistorico();
        atualizarScore(); 
        
    } catch (err) {
        mensagem.textContent = err.message;
        mensagem.style.backgroundColor = "#ffeceb";
        mensagem.style.color = "#c73b3b";
    }
});


popularTutores();
popularPetsSelect();
renderListaPets();
renderHistorico();
atualizarScore(); 