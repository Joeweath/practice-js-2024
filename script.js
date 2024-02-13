const  textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');





checkButton.addEventListener('click', () => {
    let text = textInput.value
    if(text === undefined || text.length === 0) {
        alert("Please input a value")
    } else palindromeChecker(text)
})


const palindromeChecker = (str) => {
    let newStr = str.toUpperCase().match(/[a-zA-Z0-9]/g).join('')
    let compStr = str.match(/[a-zA-Z0-9]/g).reverse().join('').toUpperCase()

    if(newStr === compStr){
        resultDiv.innerHTML =`${str} is a palindrome`
    } else resultDiv.innerHTML = `${str}  is not a palindrome`
}

