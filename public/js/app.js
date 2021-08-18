//oourse slick 
$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 1500,
  autoplay:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// slick end 	
$(document).ready(function(){
      $('#login').click(function(){
      $('.login-form').addClass('popup');
      });
      $('.login-form form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
        });
  
    });










