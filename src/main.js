const textArea = document.querySelector('.textarea--js');
const loadButton = document.querySelector('.load--js');
const saveButton = document.querySelector('.save--js');
const checkButton = document.querySelector('.check--js');
console.log(saveButton)

let color = 'green'

saveButton.addEventListener('click', () => {localStorage.setItem('content', textarea.value)})
loadButton.addEventListener('click', () => {textarea.value = localStorage.getItem('content')})
checkButton.addEventListener('click', ()=> {
    const textLength = textArea.value.length;
    textArea.classList.remove('text-gray-900')
    textArea.classList.remove('dark:text-white')
    textArea.classList.remove(`text-${color}-500`)

    if (textLength <=10) {   
        color = 'red'
    } else if (textLength > 10 && textLength <20) {
        color = 'blue'
    } else {
        color = 'green'
    }

    textArea.classList.add(`text-${color}-500`)
})