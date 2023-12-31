/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno: Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

// Creare l’array di oggetti con le informazioni fornite.

const team = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "./img/wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "./img/angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "./img/walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "./img/angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "./img/scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "./img/barbara-ramos-graphic-designer.jpg",
  },
];

// Bonus 1 & Bonus 2
console.log(team);

// Stampare le stesse informazioni su DOM sottoforma di stringhe.
const provaEl = document.querySelector(".container .row");

for (let i = 0; i < team.length; i++) {
  const member = team[i];
  console.log(member);

  const colMarkup = `
  <div class="card" style="width: 18rem">
  <img src='${member.foto}' class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${member.nome}</h5>
    <p class="card-text">${member.ruolo}</p>
  </div>
</div>
  `;

  provaEl.insertAdjacentHTML("beforeend", colMarkup);
}

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.
/*
<div class="col-12 d-flex gap-2">
              <div id="name">${member.nome}</div>
              <div id="role">${member.ruolo}</div>
              <div id="photo">${member.foto}</div>
            </div>
            */
