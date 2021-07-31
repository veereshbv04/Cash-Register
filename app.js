const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-amount");

const checkButton = document.querySelector("#check-button");
const outDivMessage = document.querySelector("#output-message");
const tableColumn = document.querySelectorAll(".no-of-notes");

const notes = [2000, 500, 100, 20, 10, 5, 1]

checkButton.addEventListener("click",() =>{
    outDivMessage.style.display="none"
    if(billAmount.value > 0){
        console.log("bill is positive");
        if(cashGiven.value >= billAmount.value){

            console.log("calculating notes to return");
            const amountToReturn = cashGiven.value - billAmount.value;
            calculateNotesToreturn(amountToReturn);
        }
        else{
            showError("Cash given is less than Bill maount");
            console.log(billAmount.value);
            console.log(cashGiven.value);
            console.log("cash is less than bill");
            
        }

    }else{
       showError("Bill should be greater than 0");
        
    }

})

function calculateNotesToreturn(returnAmount){
    console.log("in calculate function");
    let numberOfNotes = 0;
    for(let i=0;i<=notes.length;i++){
        numberOfNotes = Math.trunc(returnAmount/notes[i]);
        returnAmount = returnAmount % notes[i];
        tableColumn[i].innerHTML = numberOfNotes;

    }
    
}


function showError(message){
    outDivMessage.style.display = "block";
    outDivMessage.innerHTML=message;
}