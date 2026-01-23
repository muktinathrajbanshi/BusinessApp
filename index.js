const decreaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    console.log(itemval);

    if(itemval.value <= 0) {
        itemval.value = 0;
        alert("Negative quantity not allowed");

    } else {
        itemval.value = parseInt(itemval.value) - 1;
         itemval.style.background = "#fff";
        itemval.style.color = "#000";
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
    }
}

const increaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    console.log(itemval);

    if(itemval.value >= 5) {
        itemval.value = 5;
        alert("max 5 allowed");
        itemval.style.background = "red";
        itemval.style.color = "#fff";
    } else {
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
    }
}

