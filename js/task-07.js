const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', (event) => {
    const fontSize = event.target.value + 'px';
  text.style.fontSize = fontSize;
});