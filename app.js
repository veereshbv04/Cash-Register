const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-amount");

const checkButton = document.querySelector("#check-button");


checkButton.addEventListener("click",() =>{
    console.log(billAmount.value);
    console.log(cashGiven.value);
})
