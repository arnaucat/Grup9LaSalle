

// Obtenim inputs del DOM, del formulari i el missatge d'error
let formulari = document.getElementById('dades_formulari');
let responseMessage = document.getElementById('response-message');

formulari.addEventListener('submit', e => {
  e.preventDefault();

  //Arnau DB firebase google
  const url = "https://projectesalle-default-rtdb.europe-west1.firebasedatabase.app/";
  const project = "grup-9/";
  const database = "formulari.json";

  // Obtenim inputs del DOM, del formulari
  const nom = document.getElementById("name").value
  const mail = document.getElementById("email").value
  const telf = document.getElementById("phone").value
  const asunto = document.getElementById("subject").value
  const mess = document.getElementById("message").value

  const nouContacte = {
    nombre: nom,
    email: mail,
    telf: telf,
    tema: asunto,
    mensaje: mess
  };

  // Deshabilitem el boto per enviar de nou
  const submitButton = document.getElementById('submit');
  submitButton.disabled = true;

  const enviarFormData = () => {
    return fetch(url + project + database, {
      method: 'POST',
      body: JSON.stringify(nouContacte),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };


  //declarem funcio per enviar les dades amb control d'errors
  enviarFormData()
    .then(resposta => {
      return resposta.json()
    })
    .then(data => {
      console.log('Correcte:', data)
      responseMessage.style.display = 'block'
      responseMessage.innerText = 'Missatge rebut correctament'
      responseMessage.style.color = 'white'
    })
    .catch(error => {
      console.log('Error', error)
      responseMessage.style.display = 'block'
      responseMessage.innerText = 'Error al enviament'
      responseMessage.style.color = 'red';
    })
    .finally(() => {
      submitButton.disabled = false;
      formulari.reset(); // Reiniciar el formulari declarat amb blanc
    });


});




