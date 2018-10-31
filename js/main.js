/*******************************************IMAGE GALLERY*******************************************/

/*******Filtering*******/

// init Isotope
var $grid = $('.img-grid').isotope({
  itemSelector: '.img-container',
  //layoutMode: 'fitRows',
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function () {

  },
};


/*******************************************SCROLL MAGIC*******************************************/

/*******Scroll for the links*******/
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: "#hero",
  duration: $("#hero").height()
}).setClassToggle("#hero-link", "active").addTo(controller);
new ScrollMagic.Scene({
  triggerElement: "#about",
  duration: $("#about").height() + 100
}).setClassToggle("#about-link", "active").addTo(controller);
new ScrollMagic.Scene({
  triggerElement: "#services",
  duration: $("#services").height()
}).setClassToggle("#services-link", "active").addTo(controller);
new ScrollMagic.Scene({
  triggerElement: "#portfolio",
  duration: $("#portfolio").height()
}).setClassToggle("#portfolio-link", "active").addTo(controller);
new ScrollMagic.Scene({
  triggerElement: "#contact",
  duration: $("#contact").height()
}).setClassToggle("#contact-link", "active").addTo(controller);

/*******Other Scroll Magic Elements*******/