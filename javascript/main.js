// Partendo dai file html e css che vi allego, implementate la funzionalità slider.
// Se clicchiamo sulle icone next e prev andiamo avanti o indietro con le visualizzazioni. Il giro deve ripartire se siamo sull'ultima o la prima.
// I cerchietti devono cambiare colore contemporaneamente.
$(document).ready(
  function() {
    var arrowRight = $('.next');
    console.log(arrowRight);
    arrowRight.click(function() {
      slideNext();
    });
    var arrowPrev = $('.prev');
    arrowPrev.click(function() {
      slidePrev();
    });
  }
);


function slideNext() {
  var activeImage = $('img.active');
  var nextImage = activeImage.next();
  if (activeImage.hasClass('last') == true) {
    nextImage = $('img.first');
  }
  activeImage.removeClass('active');
  nextImage.addClass('active');
}

function slidePrev() {
  var activeImage = $('img.active');
  var prevImage = activeImage.prev();
  if (activeImage.hasClass('first') == true) {
    prevImage = $('img.last');
  }
  activeImage.removeClass('active');
  prevImage.addClass('active');
}













































// BONUS
// Aggingiamo la possibilità di andare avanti e indietro con la tastiera premendo le frecce destra/sinistra.
