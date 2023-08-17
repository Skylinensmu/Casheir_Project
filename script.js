let ArrProduct = [] ; 
let ArrPrice = [];


function addvalue(){
    let Product = document.getElementById('Product').value;
    let Price = parseFloat(document.getElementById('Price').value).toFixed(2);
    let showinput = document.createElement('p');
    let textshowinput = document.createTextNode("Product No."+(ArrProduct.length+1)+":  " +Product+ " "+ "Price:"+" "+Price+" "+"Thai Bath");
    if(Product == "" || Price == ""){
        alert ("Please insert the data");
    }


    else {
    ArrProduct.push(Product);
    ArrPrice.push(Price);

    showinput.appendChild(textshowinput);
    document.getElementById('showdetail').appendChild(showinput);
    document.getElementById('Product').value = "";
    document.getElementById('Price').value = "";
    console.log(ArrProduct);
    console.log(ArrPrice);
    showtotalprice();
    cartno();
    };
};

function Removelast() {
    ArrProduct.pop(Product);
    ArrPrice.pop(Price);

    let showdetailelement = document.getElementById('showdetail');
    showdetailelement.removeChild(showdetailelement.lastChild);

    console.log(ArrProduct);
    console.log(ArrPrice);
    showtotalprice();
    cartno();

    if(ArrPrice.length == 0){

    document.getElementById('totalprice').innerText = "Total Price is 0 Thai Bath";

    };



};


function ClearAll(){

    ArrProduct.length = 0; 
    ArrPrice.length = 0;

    let Removeallelement = document.getElementById('showdetail');
    
    while (Removeallelement.lastChild){
    Removeallelement.removeChild(Removeallelement.lastChild);
    };
 
    document.getElementById('totalprice').innerText = "Total Price is 0 Thai Bath";
    document.getElementById('Product').value = "";
    document.getElementById('Price').value = "";
    
    console.log(ArrProduct);
    console.log(ArrPrice);
    cartno();
};


function showtotalprice() {
    let total = 0.00
    for (let i = 0 ; i< ArrPrice.length ; i++){
        total += parseFloat(ArrPrice[i]);
        document.getElementById('totalprice').innerText = "Total Price is  " +total.toFixed(2) + "  Thai Bath";
    };

}


function cartno() {
    console.log(ArrPrice.length)
    let cartno = document.createTextNode(ArrProduct.length)
if (ArrPrice.length >= 1 ){
    document.getElementById('cartno').replaceChildren(cartno);
    document.getElementById('cartno').style.display = 'block' ;
}
else {
    document.getElementById('cartno').replaceChildren(cartno);
    document.getElementById('cartno').style.display = 'none' ;
};
};





