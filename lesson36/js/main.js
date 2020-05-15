$(window).scroll(function(){
    if ($(window).scrollTop() > 300) {
        $('.header').addClass('scroll');
    }
    else {
        $('.header').removeClass('scroll')
    }
});



$('.container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
      