const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById('password-one')
let passwordTwo = document.getElementById('password-two')

function generatePassword() {
  passwordOne.textContent = "test"
  passwordTwo.textContent = "testing"
}
//  for (let i = 0; i < cards.length; i++) { //cards is the array
  //  cardsEl.textContent += cards[i] + " " 

document.getElementById ('generate-passwords').addEventListener("click", generatePassword);


// click btn 

// click of button changes input for p1

// generate 16 characters in a line

// repeat unique