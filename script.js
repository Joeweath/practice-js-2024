const  textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');


let text = textInput.addEventListener('input', (e) => text = e.target.value)
console.log(text)
checkButton.addEventListener('click', (e) => {
    console.log(text)
    if(text === undefined) {
        alert("Please input a value")
    } else if(text.toUpperCase() === "A") result.innerText = "A is a palindrome"
})

