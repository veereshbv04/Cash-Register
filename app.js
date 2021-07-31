const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const userText = document.querySelector("#userinput");
const outputDiv = document.querySelector("#outputdiv");


red.addEventListener("click",(e)=>{
    e.preventDefault();
    var usermesage = userText.value 
    console.log(usermesage);
    // document.body.style.color="green";
    userText.style.color="red";


})


green.addEventListener("click",(e)=>{
    e.preventDefault();
    var usermesage = userText.value 
    console.log(usermesage);
    userText.style.color="green";


})


blue.addEventListener("click",(e)=>{
    e.preventDefault();
    var usermesage = userText.value 
    console.log(usermesage);
    userText.style.color="blue";


})