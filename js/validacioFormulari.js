// Obtenir els camps del formulari
const form = document.getElementById('contactForm');
const inputs = form.querySelectorAll('input, textarea');
const modal = document.getElementById('formAlert');

// Expresio regular per validar teléfonos de Espanya (móvil o fixa)
const phonePattern = /^(6|7|8|9)\d{8}$/;

//Funcio per mostrar el modal
function showModal(missatge) {
  modal.textContent = missatge;
  modal.classList.remove('hidden');// elimina classe hiddden del modal
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 3000) //El modal desaparecera despres de 3 segundos

}

//Funcio per validar un camp especific
//validity.valueMissing: Comprova si el camp està buit i és obligatori.
//validity.typeMismatch: Comprova si el tipus de dades introduït no coincideix amb l'esperat (per exemple, un correu electrònic invàlid).
function validateCamps (camp){
  const errorElement = document.getElementById(`${camp.id}Error`) //Si el camp és un element de formulari amb id="email", la variable errorElement agafarà l'element amb l'id="emailError"
  if (!camp.checkValidity()) { //comprova si el camp del formulari és vàlid, checkValidity() retorna true, si no és vàlid (false), s'executa el codi dins del bloc if.
    if (camp.validity.valueMissing) {
      errorElement.textContent = 'Aquest camp es requerit';
    } else if (camp.id === 'email' && camp.validity.typeMismatsh) {
      errorElement.textContent = 'Si us plau escriu un e-mail valid'; //Es defineix el text de l'error en l'element HTML que s'utilitza per mostrar el missatge d'error
    } else if (camp.id === 'phone' && camp.validity.patternMismatsh) {
      errorElement.textContent = 'El número de teléfon ha de ser válid';
    }
    errorElement.style.display = 'block'; //Aquest codi fa que l'element que conté el missatge d'error sigui visible (en lloc d'estar ocult)
    camp.style.borderColor = 'red';
  } else {
    // Validació adicional para el camp de teléfon
    if (camp.id === 'phone' && !phonePattern.test(camp.value)) {
      errorElement.textContent = 'El número de teléfon ha de ser válid';
      errorElement.style.display = 'block';
      camp.style.borderColor = 'red';
    } else {
      errorElement.style.display = 'none';//Oculta el missatge d'error si el camp és correcte.
      camp.style.borderColor = 'green';
    }
  }
}

// Validar els camps en temp real
inputs.forEach(input => { //per a cada element de la llista inputs.
  input.addEventListener('input', function () { //en una funció que afegeix un "listener" a l'element input, que escolta l'esdeveniment "input"
    validateCamps(input); //validateCamps(input) és la funció que s'encarrega de comprovar si el camp és vàlid o no (en el context anterior, aquesta funció era validateField())
  });
});

// Event per manejar l'envío del formulari
form.addEventListener('submit', function (event) {
  let formIsValid = true;

  // Validar todos los campos antes de enviar
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      validateCamps(input);
      formIsValid = false;
    }
  });

  if (!formIsValid) {
    event.preventDefault(); // Evitar l'envío si hi ha camps inválids
    showModal('Si us plau omple tots camps requerits');
  } else {
    event.preventDefault(); // Detener l'envío real per mostrar el modal de éxit
    showModal('Formulari ha enviat correctament!'); // Mostrar l'alerta personalitzada
  }
});

// Carregar els dades del formulari al inici
window.onload = loadFormData;
 