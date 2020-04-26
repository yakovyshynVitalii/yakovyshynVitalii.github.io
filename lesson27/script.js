function ShoppingList (name,price,bought){
    this.name = name;
    this.price = price;
    this.bought = bought;
};

let potato = new ShoppingList("Potato", 60,true);
let tomato = new ShoppingList("Tomato", 30,true);
let bread = new ShoppingList ("Bread", 10,false);
let orange = new ShoppingList ("Orange", 20,false);

let product = [];
product.push(potato);
product.push(orange);
product.push(tomato);
product.push(bread);    
console.log(product);


// function conclusion(x) {
//     let noBuy = x.slice().sort(function (a, b) {
//         if (a.bought > b.bought) return 1;
//         else if (a.bought < b.bought) return -1;
//     });
//     return noBuy;
// }
// console.log(conclusion(product));



function showList() {
    for (i = 0; i < product.length; i++) {
        if (product[i].bought == true) {
            console.log(` You byed already: ${product[i].name} for: ${product[i].price} uah `)
        } else {
            console.log(`You haven't byed yet:${product[i].name} for: ${product[i].price} uah`)
        }
    }
}


function newProduct (obj){
    let result = false;
    for( i=0 ; i < product; i++){
        if (product[i].name == obj.name){
            product[i].price += obj.price;
            product[i].bought = true;
            result = true ;
            console.log(`${name} , ${price}`);
        }
    } if (result == false){
        product.push(obj);
        showList();
    } 
}

function newList (){
    let name = prompt(`name`);
    let price = prompt(`price`);
    let bought = prompt(`[1] true, [2] false.`) == true? true: false ;
    newProduct(new ShoppingList (name , price , bought));
    
}


newList();