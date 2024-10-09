const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  accordion.addEventListener('click', function() {
    // Alternem la classe "active" per l'acordeó clicat
    this.classList.toggle('active');
    
    // Accedim al contingut de l'acordeó (germa següent)
    const content = this.nextElementSibling;
    
    // Mostrem u ocultem el contingut
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

document.querySelectorAll('.accordion').forEach(function (accordion) {
  accordion.addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    
    if (content.style.maxHeight) { //Utilitza la propietat max-height per crear una animació suau quan el contingut es mostra o es col·lapsa.
      content.style.maxHeight = null;
      content.style.padding = '0 15px'; // Redueix el padding quan es col·lapsa
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.padding = '15px';
    }
  });
});