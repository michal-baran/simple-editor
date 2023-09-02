const textarea = document.querySelector('.textarea--js');
console.log(textarea)

const loadButton = document.querySelector('.load--js');
console.log(loadButton)

const saveButton = document.querySelector('.save--js');
console.log(saveButton)

saveButton.addEventListener('click', () => {localStorage.setItem('content', textarea.value)})

loadButton.addEventListener('click', () => {textarea.value = localStorage.getItem('content')})