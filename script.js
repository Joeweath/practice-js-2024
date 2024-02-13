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
    let newStr = str.toUpperCase().match(/[a-zA-Z]/g).join('')
    let compStr = str.match(/[a-zA-Z]/g).reverse().join('').toUpperCase()

    if(newStr === compStr){
        resultDiv.innerHTML =`${str} is a palindrome`
    } else resultDiv.innerHTML = `${compStr} is a NOT palindrome`
}