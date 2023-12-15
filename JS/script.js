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
    foto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  },
];

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

console.log(team);

// Stampare le stesse informazioni su DOM sottoforma di stringhe.
const provaEl = document.querySelector(".container .row");

for (let i = 0; i < team.length; i++) {
  const member = team[i];
  console.log(member);

  const colMarkup = `
      <div class="col-12 d-flex gap-2">
              <div id="name">${member.nome}</div>
              <div id="role">${member.ruolo}</div>
              <div id="photo">${member.foto}</div>
            </div>
  `;

  provaEl.insertAdjacentHTML("beforeend", colMarkup);
}

/*
document.getElementById("name").innerHTML = `${member.nome}`;
  document.getElementById("role").innerHTML = `${member.ruolo}`;
  document.getElementById("photo").innerHTML = `${member.foto}`;
  */

/*
document.getElementById("name").innerHTML += i + `${member.nome}` + team[i];
  document.getElementById("role").innerHTML +=
    i + 1 + `${member.ruolo}` + team[i];
  document.getElementById("photo").innerHTML +=
    i + 1 + `${member.foto}` + team[i];
    */
