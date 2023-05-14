let counterValue = 0;

const counter = document.getElementById('counter');
const value = document.getElementById('value');

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
}

const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
}

counter.addEventListener('click', (event) => {
  if (event.target.dataset.action === 'increment') {
    increment();
  }

  if (event.target.dataset.action === 'decrement') {
    decrement();
  }
});