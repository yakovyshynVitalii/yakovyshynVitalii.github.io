
const Album = {
    "11292" : {
        "name":"CD(not to disappear)",
        "cost": 55,
        "description": "Release date: 15th january 2016",
        "image":"../img/item1.png"
        }
}
let caount = 0;


$('#add_cart').click(function(){
    // const cart = JSON.parse (localStorage.getItem('cart'));
    
    // if(cart){
    //     localStorage.setItem('cart',JSON.stringify([...cart,"11292"]));
    // }
    caount++;

    $('#count').text(caount);
});


$('#subtract').click(function(){
    // const cart = JSON.parse (localStorage.getItem('cart'));
    
    // if(cart){
    //     localStorage.setItem('cart',JSON.stringify([...cart,"11292"]));
    // }
    caount--;

    $('#count').text(caount);
});
