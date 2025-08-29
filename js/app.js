$(document).ready(function(){
    $('#popularcar .container .slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 500,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
});