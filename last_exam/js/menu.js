
$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')

    })
})

$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('header').addClass('scroll');
        $('.soc_links').addClass('none_soc_links');
    }
    else {
        $('header').removeClass('scroll')
        $('.soc_links').removeClass('none_soc_links');
    }
});

$(document).ready(function(){
    $('.menu_soc').click(function(){
        $('nav').removeClass('active')
    })

    
})

function myFunction(x) {
    x.classList.toggle("change");
  };

  