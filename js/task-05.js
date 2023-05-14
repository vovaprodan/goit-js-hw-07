const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', function (event) {
    const valueInput = event.currentTarget.value;
    if (valueInput === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = nameInput.value;
  }
}); 
