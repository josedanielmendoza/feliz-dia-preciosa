// Animar título
const titulo = "Feliz Año y Medio ❤️";
let indice = 0;
const tituloElemento = document.getElementById("main-title");

function escribirTitulo() {
  if (indice < titulo.length) {
    tituloElemento.textContent += titulo[indice];
    indice++;
    setTimeout(escribirTitulo, 100);
  }
}
escribirTitulo();

// Letra de la canción en español sincronizada
const lineas = [
  "Chicas hermosas en todo el mundo",
  "Podría estar persiguiéndolas, pero sería una pérdida de tiempo",
  "Porque no tienen nada sobre ti, nena",
  "Nada sobre ti, nena"
];

const letras = document.getElementById("lyrics");
const audio = document.getElementById("audio");

audio.addEventListener("timeupdate", () => {
  const tiempo = audio.currentTime;

  if (tiempo >= 1 && letras.children.length < 1)
    letras.innerHTML += `<p>${lineas[0]}</p>`;

  if (tiempo >= 5 && letras.children.length < 2)
    letras.innerHTML += `<p>${lineas[1]}</p>`;

  if (tiempo >= 10 && letras.children.length < 3)
    letras.innerHTML += `<p>${lineas[2]}</p>`;

  if (tiempo >= 14 && letras.children.length < 4)
    letras.innerHTML += `<p>${lineas[3]}</p>`;
});

// Emojis flotantes desde abajo
const emojis = ['❤️', '🌹', '💖', '💕'];
function crearEmoji() {
  const emoji = document.createElement('div');
  emoji.classList.add('floating');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(emoji);
  setTimeout(() => emoji.remove(), 10000);
}
setInterval(crearEmoji, 300);

// Permite activar sonido tras interacción (click/tap)
document.body.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false;
    audio.play().catch(e => {
      console.log("Error al reproducir:", e);
    });
  }
});
