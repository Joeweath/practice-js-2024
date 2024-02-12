const  textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');

const text = textInput.addEventListener('input', (e) => console.log("working", e.target.value))
console.log(text)
checkButton.addEventListener('click', (e) => text === undefined ? alert("Please input a value") : console.log("yurrr"))

