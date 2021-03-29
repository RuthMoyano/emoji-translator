const submit = document.querySelector("#submit")
const inputText = document.querySelector("#translator-input")
const outputText = document.querySelector("#results")





submitButton.addEventListener("click", submitButtonPressed)


function submitPressed() {
    const inputTextValue = inputText.value
    const radioArrs = document.querySelectorAll('[type="radio"]');
    for (const radio of radioArrs) {
        if (radio.checked) {


            if (radio.value === 'encode') {
                outputText.innerText = encode(inputTextValue)
            }
            else if (radio.value === 'translate') {
                outputText.innerText = translate(inputTextValue)
            }
            else if (radio.value === 'madlib') {
                outputText.innerText = madlib(inputTextValue)
            }
            else if (radio.value === 'search') {
                executeSearch(inputTextValue)
            }
            else if (radio.value === 'random') {
                const choice = Math.floor(Math.random() * 4)
                if (choice === 0) {
                    outputText.innerText = encode(inputTextValue)
                }
                else if (choice === 1) {
                    outputText.innerText = translate(inputTextValue)
                }
                else if (choice === 2) {
                    outputText.innerText = madlib(inputTextValue)
                }
                else {
                    executeSearch(inputTextValue)
                }
            }
        }
    }
}



function executeSearch(inputTextValue) {
    const emojiArr = search(inputTextValue)
    outputText.innerText = ""
    if (emojiArr.length === 0) { outputText.innerText = "No emojis found"; return }
    for (const emoji of emojiArr) {
        let para = document.createElement("p");
        outputText.appendChild(para);
        para.innerText = emoji.symbol
    }
} 