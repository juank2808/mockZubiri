 $(document).ready(function(){
      $('.parallax').parallax();

    $('.button-collapse').sideNav({
      menuWidth: 240, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
    );//
    $('.modal-trigger').leanModal();//

   
    $('.carousel.carousel-slider').carousel({full_width: true});
    
 //efecto scroll
 $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 5000);
        return false;
      }
    }
  });
});
// fin del efecto

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });
 });