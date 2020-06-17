
  
$(document).ready(function(){
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
        vertical:true,
      centerMode: true,
      focusOnSelect: true,
      
    });
  

  });



  $(document).ready(function(){
    $('.slick_950px').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
  

  });
