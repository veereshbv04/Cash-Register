const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-amount");

const checkButton = document.querySelector("#check-button");
const outDivMessage = document.querySelector("#output-message");
const tableColumn = document.querySelectorAll(".no-of-notes");
const wholeTable = document.querySelector(".change-table");

const cashDiv = document.querySelector("#cash-div");
const nextButton = document.querySelector("#nextButton");

const notes = [2000, 500, 100, 20, 10, 5, 1]

cashDiv.style.display="none";



nextButton.addEventListener("click",(e) =>{
    e.preventDefault();

    if(Number(billAmount.value) <=0){
        showError("Enter valid details");
        return;
    }
    cashDiv.style.display="block";
    nextButton.style.display="none";

})


wholeTable.style.display="none";
checkButton.addEventListener("click",(e) =>{
   
    e.preventDefault();
    clearNotesTable();
    hideShowerror();


    console.log(typeof(billAmount.value));
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