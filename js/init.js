(function ($) {
  $(function () {

    $('.button-collapse').sideNav({
      edge: 'right'
    });

    $('.carousel').carousel({ full_width: true });

    autoplay();
    function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 4500);
    }

  }); // end of document ready
})(jQuery); // end of jQuery name space