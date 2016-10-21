 $(document).ready(function(){
      $('.parallax').parallax();

    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
    );//
    $('.modal-trigger').leanModal();//

   
    $('.carousel.carousel-slider').carousel({full_width: true});
     
 });