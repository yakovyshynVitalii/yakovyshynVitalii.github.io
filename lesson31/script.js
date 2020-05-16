// $(`.js-tab-trigger`).on(`click`,function() {
//     let tabName = $(this).data(`tab`);
//      tab = $(`js-tab-content [data-tab="`+tabName+`"]`);
//     tab.addClass(`active`);
//     console.log (tabName);

// });


+function (){
document.querySelectorAll('tab')
console.log(document.querySelectorAll('box'));
}()

function insert(num){
    document.form.textview.value =
    document.form.textview.value + num;
}

function clean(){
    document.form.textview.value = "";
}

function back(){
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length -1);
}

function equal(){
    let exp = document.form.textview.value;
    if (exp){
        document.form.textview.value = eval(exp);
    } 
}