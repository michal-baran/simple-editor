const textarea = document.querySelector('.textarea--js');
const loadButton = document.querySelector('.load--js');
const saveButton = document.querySelector('.save--js');
const checkButton = document.querySelector('.check--js');
console.log(saveButton)

let color = 'green'

saveButton.addEventListener('click', () => {localStorage.setItem('content', textarea.value)})
loadButton.addEventListener('click', () => {textarea.value = localStorage.getItem('content')})
checkButton.addEventListener('click', ()=> {
    const textLength = textarea.value.length;
    textarea.classList.remove('text-gray-900')
    textarea.classList.remove('dark:text-white')
    textarea.classList.remove(`text-${color}-500`)

    if (textLength <=10) {   
        color = 'red'
    } else if (textLength > 10 && textLength <20) {
        color = 'blue'
    } else {
        color = 'green'
    }

    textarea.classList.add(`text-${color}-500`)
})