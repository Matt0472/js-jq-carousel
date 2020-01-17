// Partendo dai file html e css che vi allego, implementate la funzionalità slider.
// Se clicchiamo sulle icone next e prev andiamo avanti o indietro con le visualizzazioni. Il giro deve ripartire se siamo sull'ultima o la prima.
// I cerchietti devono cambiare colore contemporaneamente.
$(document).ready(
  function() {

  }
);


function slideNext() {
  var arrowNext = $('.next > i');
  var activeImage = $('img.active');
  var nextImage = $('img.active').next();
  if (activeImage.hasClass('active') == true) {
    activeImage.removeClass('active');
    nextImage.addClass('active');
    // activeImage.hasClass('active') = true;
  }
}
function slideNext() {
  var arrowPrev = $('.prev i');
  var activeImage = $('img.active');
}













































// BONUS
// Aggingiamo la possibilità di andare avanti e indietro con la tastiera premendo le frecce destra/sinistra.
