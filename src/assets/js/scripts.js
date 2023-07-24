const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePasswordBtn = document.getElementById('generate-passwords')
let passwordOneEl = document.getElementById('password-one')
let passwordTwoEl = document.getElementById('password-two')
let passwordLength = 16


function generatePassword() {
  let password = ""
  for (let i =0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length)
    password += characters[randomNumber]
  }
  return password
}

generatePasswordBtn.addEventListener('click', function(){ 
  passwordOneEl.textContent = generatePassword()
  passwordTwoEl.textContent = generatePassword()
})