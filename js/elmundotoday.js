// API acudits

function obtenirAcudit() {
  fetch("https://v2.jokeapi.dev/joke/Programming?lang=es")
    .then((res) => res.json())
    .then((res) => {
      let acuditTxt =
        res.type === "single" ? res.joke : `${res.setup} - ${res.delivery}`;
      document.getElementById("acudit").innerText = acuditTxt;
    })
    .catch((error) => console.log("Error: ", error));
}

obtenirAcudit();

document
  .getElementById("btnAltreAcudit")
  .addEventListener("click", obtenirAcudit);

// API El Mundo Today

function obtenirNoticiaEMT() {
  fetch("https://www.elmundotoday.com/wp-json/wp/v2/posts")
    .then((res) => res.json())
    .then((res) => {
      const noticia = res[0];
      const titol = noticia.title.rendered;
      const contingut = noticia.content.rendered;

      document.getElementById("titolNoticia").innerText = titol;
      document.getElementById("paragrafNoticia").innerHTML = contingut;
    })
    .catch((error) => console.log("Error: ", error));
}

obtenirNoticiaEMT();
