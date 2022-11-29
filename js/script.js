let bottone = document.getElementById("genera");
bottone.addEventListener('click', function(){

    let km;
    let eta;
    let name;
    let discountvalue;
    let firstprice;

    //input km
    km = document.getElementById("km").value;

    console.log (km)

    //input età 

    eta = document.getElementById("age_customer").value;

    console.log(eta)

    //input nome

    name = document.getElementById("name").value;

    //calcolo prezzo

    firstprice = km * '0.21'

    finalPrice = firstprice


    //applico sconti 
    if(eta < 18){
        discountvalue = (firstprice / 100) *20;
        finalPrice = (firstprice - discountvalue).toFixed(2) ;
        console.log(finalPrice)
        
    }

    else if (eta > 65){
        discountvalue = (firstprice / 100) *40;
        finalPrice = (firstprice - discountvalue).toFixed(2);
        console.log(finalPrice)
        
    }

    else{
     
    }

    document.getElementById ("price").innerHTML = finalPrice +("&#8364;") ;

    document.getElementById ('nome-cliente').innerHTML = "Ciao" +" "+ name



}
);