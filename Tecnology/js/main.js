// NAVBAR_SCROLL

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var element = document.getElementById("navbar");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    element.classList.add("navbar_scroll");
  } else {
    element.classList.remove("navbar_scroll");
  }
}




function myFunction() {
    document.getElementById("content_box1").style.opacity = "1";
    document.getElementById('content_button-1').style.opacity ='0';
}

function myFunction2() {
    document.getElementById("content_box1").style.opacity = "0";
    document.getElementById('content_button-1').style.opacity ='1';
}


const BlogButton = document.getElementById('Blog_gallery1_info_text_button');
function myFunction3() {
    BlogButton.classList.toggle('active');
}

