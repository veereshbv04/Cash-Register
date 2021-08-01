const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-amount");

const checkButton = document.querySelector("#check-button");
const outDivMessage = document.querySelector("#output-message");
const tableColumn = document.querySelectorAll(".no-of-notes");
const wholeTable = document.querySelector(".change-table");

const notes = [2000, 500, 100, 20, 10, 5, 1]

checkButton.addEventListener("click",(e) =>{
    wholeTable.style.display="none";
    e.preventDefault();
    clearNotesTable();
    hideShowerror();

    const bill = Number(billAmount.value);
    const cash = Number(cashGiven.value);
    console.log(bill);
    console.log(cash);

    if(bill>0 && cash>0){

        if(bill > cash){
            console.log("cash",cash);
            console.log("bill",bill);
            showError("Cash is less than bill amount");
            wholeTable.style.display="none";
            return;
        }
        wholeTable.style.display="block";
        const amounToReturn = cash - bill;
        calculateNotesToreturn(amounToReturn);
    }else{
        showError("Enter valid details");
        wholeTable.style.display="none";
        return;
    }
  

    
});

function calculateNotesToreturn(returnAmount){
    wholeTable.style.display="block";
    console.log("in calculate function");
    let numberOfNotes = 0;
    for(let i=0;i<=notes.length;i++){
        numberOfNotes = Math.trunc(returnAmount/notes[i]);
        returnAmount = returnAmount % notes[i];
        tableColumn[i].innerHTML = numberOfNotes;

    }
    
}


function hideShowerror(){
    outDivMessage.style.display="none";
}

function clearNotesTable(){
    
   for(let notes in tableColumn){
       notes.innerHTML = " ";
   }
}

function showError(message){
    outDivMessage.style.display = "block";
    outDivMessage.innerHTML=message;
}