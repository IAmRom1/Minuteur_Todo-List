// App created by romainsavigny.be | /IAmRom1

//variable générale
const titre = document.querySelector(".monTitre");
const notifC = document.querySelector('.notifC');
const notifCT = document.querySelector('.notifI');
const ring = () => {
  const audio = new Audio();
  audio.src = "./asstes/songs/As-It-Was-Harry-Styles.mp3";
  audio.play();
};
let totalSeconds;
let interval;

//compteur personaliser

const input = document.querySelector("input");
const form = document.querySelector("form");
const conterDisplayP = document.querySelector(".conterDisplayP");




//fonction compteur personalisé

function countDownP() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const sec = seconds < 10 ? "0" + seconds : seconds;
  notifC.style.opacity = 1;
  notifC.classList.add('notifin');
  notifC.addEventListener('animationend', () => {
  notifC.classList.add('hidden');
  });
  notifCT.textContent = "Minuteur de " + minutes + " : " + sec + " est lancé !";
  conterDisplayP.textContent = minutes + " : " + sec;
  titre.textContent = minutes + " : " + sec;
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    conterDisplayP.textContent = "Terminé";
    titre.textContent = "Terminé";
    ring();
    clearInterval(interval);
  }
}

//pararmètre compteur personaliser

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choiceP.value)) {
    alert("Met un chiffre pour lancer le minuteur");
  } else {
    totalSeconds = choiceP.value * 60;
    choiceP.value = "";
    clearInterval(interval);
    interval = setInterval(countDownP, 1000);
  }
});

//compteur numéro 1
const compt1 = document.getElementById("30min");
const conterDisplay30 = document.querySelector(".conterDisplay30");
let min1 = 30;
let Notif1 = 30;

compt1.addEventListener("click", (e) => {
  e.preventDefault();
  totalSeconds = min1 * 60;
  min1 = "";
  notifC.style.opacity = 1;
  notifC.classList.add('notifin');
  notifC.addEventListener('animationend', () => {
  notifC.classList.add('hidden');
  });
  clearInterval(interval);
  interval = setInterval(countDown1, 1000);
});
function countDown1() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const sec = seconds < 10 ? "0" + seconds : seconds;
  notifCT.textContent = "Minuteur de " + Notif1 + " min ";
  conterDisplay30.textContent = minutes + " : " + sec;
  titre.textContent = minutes + " : " + sec;
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    conterDisplayP.textContent = "Terminé";
    titre.textContent = "Terminé";
    ring();
    clearInterval(interval);
  }
}
//compteur numéro 2
const compt2 = document.getElementById("45min");
const conterDisplay45 = document.querySelector(".conterDisplay45");
let min2 = 45;
let notif2 = 45;

compt2.addEventListener("click", (e) => {
  e.preventDefault();
  totalSeconds = min2 * 60;
  min2 = "";
  notifC.style.opacity = 1;
  notifC.classList.add('notifin');
  notifC.addEventListener('animationend', () => {
  notifC.classList.add('hidden');
  });
  clearInterval(interval);
  interval = setInterval(countDown2, 1000);
});
function countDown2() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const sec = seconds < 10 ? "0" + seconds : seconds;
  notifCT.textContent = "Minuteur de " + notif2 + " min ";
  conterDisplay45.textContent = minutes + " : " + sec;
  titre.textContent = minutes + " : " + sec;
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    conterDisplay45.textContent = "Terminé";
    titre.textContent = "Terminé";
    ring();
    clearInterval(interval);
  }
}
//compter numéro 3
const compt3 = document.getElementById("60min");
const conterDisplay60 = document.querySelector(".conterDisplay60");
let min3 = 60;
let notif3 = 60;

compt3.addEventListener("click", (e) => {
  e.preventDefault();
  totalSeconds = min3 * 60;
  min3 = "";
  notifC.style.opacity = 1;
  notifC.classList.add('notifin');
  notifC.addEventListener('animationend', () => {
  notifC.classList.add('hidden');
  });
  clearInterval(interval);
  interval = setInterval(countDown3, 1000);
});
function countDown3() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const sec = seconds < 10 ? "0" + seconds : seconds;
  notifCT.textContent = "Minuteur de " + notif3 + " min ";
  conterDisplay60.textContent = minutes + " : " + sec;
  titre.textContent = minutes + " : " + sec;
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    conterDisplay60.textContent = "Terminé";
    titre.textContent = "Terminé";
    ring();
    clearInterval(interval);
  }
}
const color = document.getElementById("colortest");
const body = document.querySelector('body')

color.addEventListener('change', ()=>{
  console.log(color.value);
  document.body.style.backgroundColor = color;
})