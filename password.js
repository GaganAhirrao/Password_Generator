const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]

let password_1_EL = document.getElementById("password_1")
let password_2_EL = document.getElementById("password_2")

function generatePassword() {
    password_1_EL.textContent = ""
    password_2_EL.textContent = ""
    for (let i = 0; i < 15; i++) {
        let password_1_index = Math.floor(Math.random() * characters.length)
        let password_2_index = Math.floor(Math.random() * characters.length)
        password_1_EL.textContent += characters[password_1_index]
        password_2_EL.textContent += characters[password_2_index]
    }
}