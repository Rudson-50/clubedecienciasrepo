$(".carousel").on("touchstart", function (event) {
  const xClick = event.originalEvent.touches[0].pageX;
  $(this).one("touchmove", function (event) {
    const xMove = event.originalEvent.touches[0].pageX;
    const sensitivityInPx = 5;

    if (Math.floor(xClick - xMove) > sensitivityInPx) {
      $(this).carousel("next");
    } else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
      $(this).carousel("prev");
    }
  });
  $(this).on("touchend", function () {
    $(this).off("touchmove");
  });
});
$("#recipeCarousel").on("slide.bs.carousel", function () {
  $("#carousel-inner").css("overflow", "hidden");
});

$("#recipeCarousel").on("slid.bs.carousel", function () {
  $("#carousel-inner").css("overflow", "visible");
});

var arrow = $('#arrow');
var temporizador;
var posicaoAnterior = $(window).scrollTop();
var alturaLimite = 900; // Altura em pixels


$(window).scroll(function() {
  var posicaoAtual = $(window).scrollTop();

  if (posicaoAtual < posicaoAnterior && posicaoAtual > alturaLimite) {
   arrow.fadeIn();
 
  } else {
   arrow.fadeOut();

  }
  posicaoAnterior = posicaoAtual; // Atualizar a posição anterior de rolagem
});
function ocultarObjeto() {
  arrow.fadeOut();

}
function reiniciarTemporizador() {
  clearTimeout(temporizador);
  temporizador = setTimeout(ocultarObjeto, 2000); // Tempo em milissegundos antes de ocultar o objeto (3 segundos neste exemplo)
}
document.addEventListener("DOMContentLoaded", function() {
  arrow.hide();

});
window.addEventListener("scroll", function() {
  reiniciarTemporizador();
});
arrow.on('click', function(e) {

  $("html, body").animate({scrollTop: 0}, 500);
});