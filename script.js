const  textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');


let text = textInput.addEventListener('input', (e) => text = e.target.value)
console.log(text)
checkButton.addEventListener('click', () => {
    if(text === undefined || text.length === 0) {
        alert("Please input a value")
    } else palindromeChecker(text)
})


const palindromeChecker = (str) => {
    console.log(`Here is the word: ${str.toUpperCase()}`, str.split('').reverse().join('').toUpperCase())
    if(str.toUpperCase() === str.split('').reverse().join('').toUpperCase()){

        console.log(`${str} is a palindrome`)
    } else console.log(`${str} is a NOT palindrome`)
}