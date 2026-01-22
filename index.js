const decreaseNumber = () => {
    let itemval = document.getElementById("textbox");
    console.log(itemval);

    if(itemval.value <= 0) {
        itemval.value = 0;

    } else {
        itemval.value = parseInt(itemval.value) - 1;
        alert("Negative quantity not allowed");
         itemval.style.background = "#fff";
        itemval.style.color = "#000";
    }
}

const increaseNumber = () => {
    let itemval = document.getElementById("textbox");
    console.log(itemval);

    if(itemval.value >= 5) {
        itemval.value = 5;
        alert("max 5 allowed");
        itemval.style.background = "red";
        itemval.style.color = "#fff";
    } else {
        itemval.value = parseInt(itemval.value) + 1;
    }
}