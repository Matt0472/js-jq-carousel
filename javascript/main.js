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

    // BONUS
    // Aggingiamo la possibilità di andare avanti e indietro con la tastiera premendo le frecce destra/sinistra.
    $(document).keydown(
      function() {
        if (event.which == 39) {
          slideNext();
        } else if (event.which == 37) {
          slidePrev();
        }
      }
    )
  }
);


function slideNext() {
  var activeImage = $('img.active');
  var nextImage = activeImage.next();
  var activeCircle = $('.nav > i.active');
  var nextCircle = activeCircle.next();
  if (activeImage.hasClass('last') == true && activeCircle.hasClass('last') == true) {
    nextImage = $('img.first');
    nextCircle = $('i.first');
  }
  activeImage.removeClass('active');
  nextImage.addClass('active');
  activeCircle.removeClass('active');
  nextCircle.addClass('active');
}

function slidePrev() {
  var activeImage = $('img.active');
  var prevImage = activeImage.prev();
  var activeCircle = $('.nav > i.active');
  var prevCircle = activeCircle.prev();
  if (activeImage.hasClass('first') == true && activeCircle.hasClass('first') == true) {
    prevImage = $('img.last');
    prevCircle = $('i.last');
  }
  activeImage.removeClass('active');
  prevImage.addClass('active');
  activeCircle.removeClass('active');
  prevCircle.addClass('active');
}
