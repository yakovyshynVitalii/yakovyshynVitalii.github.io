function init() {
    $.getJSON("goods.json",goodsOut);
}

function goodsOut(){
    //загружаю товари на сторінку
    console.log(data);
  
}
init();