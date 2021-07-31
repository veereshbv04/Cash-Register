const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-amount");

const checkButton = document.querySelector("#check-button");
const outDivMessage = document.querySelector("#output-message");


checkButton.addEventListener("click",() =>{
    outDivMessage.style.display="none"
    if(billAmount.value > 0){

        if(cashGiven.value<billAmount.value){
            outDivMessage.style.display="block";
            outDivMessage.innerHTML="Cash given should be atlease equal to bill amount";
        else{
            const amountToReturn = cashGiven.value - billAmount.value;

            
        }

    }else{
        outDivMessage.style.display="block";
        outDivMessage.innerHTML="bill should be greater than 0";
        console.log("ello")
    }

})

function calculateNotesToreturn (returnAmount){
    
}
