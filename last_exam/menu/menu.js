
$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
})

$(window).scroll(function(){
    if ($(window).scrollTop() > 300) {
        $('header').addClass('scroll');
        $('.icons').addClass('none_icons');
    }
    else {
        $('header').removeClass('scroll')
        $('.icons').removeClass('none_icons');
    }
});