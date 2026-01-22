const decreaseNumber = () => {
    let itemval = document.getElementById("textbox");
    console.log(itemval);

    if(itemval.value <= 0) {
        itemval.value = 0;
    } else {
        itemval.value = parseInt(itemval.value) - 1;
    }
}