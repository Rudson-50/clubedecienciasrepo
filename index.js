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

$("#slide-testimonal").owlCarousel({
  margin: 0,
  center: true,
  loop: true,
  nav: true,
  navClass: [ 'owl-prev-custom', 'owl-next' ],
  navText: [
    "<img src='img/index/arrow-prev.png'>",
    "<img src='img/index/arrow-next.png'>",
  ],
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
      margin: 15,
    },
    1000: {
      items: 1,
    },
  },
});
$("#testimonal").owlCarousel({
  margin: 0,
  center: true,
  loop: true,
  nav: true,
  navClass: [ 'owl-prev', 'owl-next-custom' ],
  navText: [
    "<img src='img/index/arrow-prev.png'>",
    "<img src='img/index/arrow-next.png'>",
  ],
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
      margin: 15,
    },
    1000: {
      items: 1,
    },
  },
});

$(document).ready(function () {
  var o1 = $("#slide-testimonal"),
    o2 = $("#testimonal");

  //Sync o2 by o1
  o1.on("click", ".owl-next-custom", function () {
    o2.trigger("next.owl.carousel");
  });
  o1.on("click", ".owl-prev-custom", function () {
    o2.trigger("prev.owl.carousel");
  });
  //Sync o1 by o2
  o2.on("click", ".owl-next-custom", function () {
    o1.trigger("next.owl.carousel");
  });
  o2.on("click", ".owl-prev-custom", function () {
    o1.trigger("prev.owl.carousel");
  });
});
