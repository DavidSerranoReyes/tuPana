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
  "encarlizado",
  "El amor te hace crecer, disfruta cada segundo de aventura"
);

function giveAdvice(arg1) {
  //console.log(emotions);

  //console.log(emotions.keys());
  //console.log(emotions.values());

  arg1 = arg1.toLowerCase();
  if (emotions.has(arg1)) {
    return emotions.get(arg1);
  } else {
    return "Puedes siempre hablar con alguien del tema.";
  }
}

console.log(giveAdvice("Ansiedad"));

function getAvailableFeelings(arg1) {
  let feelings = [];

  for (const elemento of emotions.keys()) {
    feelings.push(elemento);
  }
  return feelings;
}

console.log(getAvailableFeelings());
console.log(giveAdvice("encarlizado"));
console.log(giveAdvice("tristeza"));
console.log(giveAdvice("felicidad"));
console.log(giveAdvice("optimismo"));
console.log(giveAdvice("ira"));

// anadir consejos validos
//crear un repository en github
//conectar con el repositorio local
//guardar cambios y push repository
//enviar el link.

//https://github.com/DavidSerranoReyes/tupana
