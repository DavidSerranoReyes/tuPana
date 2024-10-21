let emotions = new Map();
emotions.set(
  "tristeza",
  "Esta bien sentir tristeza, pero recuerda que las emociones son pasajeras"
);
emotions.set(
  "depresion",
  "Aunque no loparezca, tu valor sigue intacto. Un dia a la vez"
);
emotions.set(
  "ansiedad",
  "Respira profundamente, estas aqui y ahora. El futuro no te controla"
);
emotions.set("felicidad", "Disfruta el momento, el presente es un regalo");
emotions.set("optimismo", "Cada dia es una nueva oportunidad para algo bueno");
emotions.set(
  "enamorado",
  "El amor te hace crecer, disfruta cada segundo de aventura"
);

function giveAdvice(arg1) {

  arg1 = arg1.toLowerCase();
  if (emotions.has(arg1)) {
    return emotions.get(arg1);
  } else {
    return "Puedes siempre hablar con alguien del tema.";
  }
}


function getAvailableFeelings(arg1) {
  let feelings = [];

  for (const elemento of emotions.keys()) {
    feelings.push(elemento);
  }
  return feelings;
}

console.log(getAvailableFeelings());


function mostrarMensaje(texto) {
  document.getElementById("mensajeModal").innerText = texto;
  document.getElementById("myModal").style.display = "block"; // Mostrar la ventana modal
}
function cerrarMensaje() {
  document.getElementById("myModal").style.display = "none"; // Ocultar la ventana modal
}

// Cerrar la modal cuando se hace clic fuera de ella
window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};