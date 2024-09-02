let Paksc = document.getElementById("screen-pak")
let Indsc = document.getElementById("screen-ind")
let countP = 0
let counti = 0
function paki(){
    
    countP = countP + 1 
    Paksc.textContent = countP
}
console.log(paki)
function indi(){

  counti = counti + 1
  Indsc.textContent = counti 
}