const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');


// Funció per mostrar/ocultar el menú desplegable
dropbtn.addEventListener('click', function(event) {
  event.preventDefault();
  dropdownContent.classList.toggle('show'); //Alterna la classe show al contingut del menú, mostrant-lo o amaguant-lo
});

// Tancar el menú desplegable si es fa clic fora d'éll 
window.addEventListener('click', function(event) { 
  if (!event.target.matches('.dropbtn')) {//Comprova si l'element clicat NO és el botó del menú desplegable.
    //.matches('.dropbtn'): Mètode que verifica si l'element (en aquest cas event.target) té la classe CSS dropbtn (és a dir, el botó del menú desplegable).
    if (dropdownContent.classList.contains('show')) { //Si el contingut del menú té la classe show  llavors es treu la classe show, tancant el menú desplegable.
      dropdownContent.classList.remove('show');
    }
  }
});