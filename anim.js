// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I'm tired of lovin' from afar", time: 1 },
  { text: "And never being where you are", time: 5 },
  { text: "Close the windows, lock the doors", time: 9 },
  { text: "Don't wanna leave you anymore", time: 12 },
  { text: "I'm starin' at the same ", time: 19 },
  { text: "Four walls in a different hotel", time: 20 },
  { text: "It' an unfamiliar feelin' but i know it so well", time: 24 },
  { text: "But you know the truth", time: 29 },
  { text: "I'd rather hold you", time: 31 },
  { text: "Than this mobile in my hand", time: 33 },
  { text: "But i guess it'll do", time: 35 },
  { text: "Cause for you, I would rin up my phone bill", time: 36 },
  { text: "ooh-ooh-ohh,ah", time: 40 },
  { text: "You say I'm always leavin", time: 42 },
  { text: "ooh-ooh-ohh,ah", time: 46 },
  { text: "You, when you need me the most", time: 48 },
  { text: "But the, the car's outside", time: 50 },
  { text: "But I don't wanna go tonight", time: 54 },
  { text: "I'm not gettin' in the Addison Lee", time: 57 },
  { text: "Unless you pack your bags", time: 60 },
  { text: "You're comin' with me", time: 64 },
  { text: "I'm tired of lovin' from afar", time: 66 },
  { text: "And never being where you are", time: 69 },
  { text: "Close the windows, lock the doors", time: 71 },
  { text: "Don't wanna leave you anymore", time: 73 },
  { text: "ooh-ooh-ohh,ah", time: 75 },
  { text: "ooh-ooh-ohh,ah", time: 81 },
  { text: "Don't wanna leave you anymore", time: 86 },
  { text: "Oh, darling, all of the city lights", time: 89 },
  { text: "Never shine as bright as your eyes", time: 92 },
  { text: "I' would trade them all for a minute more", time: 94 },
  { text: "But the car' outside", time: 97 },
  { text: "And he's called me twice", time: 99 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);