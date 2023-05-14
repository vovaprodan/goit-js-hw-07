const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInput)
function onInput(event) {
  const inputLength = event.currentTarget.value.length;
  const validLength = Number(event.currentTarget.dataset.length);

  if (inputLength === validLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}