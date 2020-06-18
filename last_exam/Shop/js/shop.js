
const Album = {
    "11292" : {
        "name":"CD(not to disappear)",
        "cost": 55,
        "description": "Release date: 15th january 2016",
        "image":"../img/item1.png"
        }
}
let count = 0;


$('#add_cart').click(function(){
    // const cart = JSON.parse (localStorage.getItem('cart'));
    
    // if(cart){
    //     localStorage.setItem('cart',JSON.stringify([...cart,"11292"]));
    // }
    count++;

    $('#count').text(count);
    
    
});


$('#subtract').click(function(){
    // const cart = JSON.parse (localStorage.getItem('cart'));
    
    // if(cart){
    //     localStorage.setItem('cart',JSON.stringify([...cart,"11292"]));
    // }
    
    count--;
    if(count < 0){
        count=0;
    }
    $('#count').text(count);
    
});
