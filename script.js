const message = "Feliz un año y medio, TE AMO 💖";

function typeWriterEffect(text, elementId, speed = 100) {
  const el = document.getElementById(elementId);
  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.substring(0, i++);
      setTimeout(type, speed);
    }
  }
  type();
}

function createFloatingElement() {
  const el = document.createElement("div");
  el.className = "floating";
  const symbols = ["🌹", "❤️", "💘", "🥀"];
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  el.style.left = `${Math.random() * 90 + 5}%`;
  el.style.top = `${Math.random() * 30 + 60}%`;
  el.style.fontSize = `${Math.random() * 40 + 40}px`;

  document.getElementById("floating-elements").appendChild(el);
  setTimeout(() => el.remove(), 5000);
}

window.onload = () => {
  typeWriterEffect(message, "main-text");
  setInterval(createFloatingElement, 600);

  const audio = document.getElementById("bg-music");
  const lyricsEl = document.getElementById("lyrics-text");

  const lyrics = [
    { time: 56, text: "Beautiful girls all over the world" },
    { time: 60, text: "I could be chasing but my time would be wasted" },
    { time: 65, text: "They got nothin’ on you, baby 🎶" }
  ];

  let currentLine = 0;

  audio.addEventListener("canplaythrough", () => {
    audio.currentTime = 56;
    audio.play();
  });

  audio.addEventListener("timeupdate", () => {
    const t = audio.currentTime;

    if (t >= 75) {
      audio.pause();
    }

    if (currentLine < lyrics.length && t >= lyrics[currentLine].time) {
      lyricsEl.classList.remove("show");
      setTimeout(() => {
        lyricsEl.textContent = lyrics[currentLine].text;
        lyricsEl.classList.add("show");
        currentLine++;
      }, 100);
    }
  });
};
