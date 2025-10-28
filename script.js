console.log(window, {document});
let heading = document.querySelector('h1');
console.log({heading});
heading.innerText = 'Hello DOM!';

let button = document.querySelector('button');

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener('click', event => {
    console.log(event);
    let color = getRandomColor();
    heading.innerText =color;
    heading.style.color = color;
});
setInterval(() => {
document.documentElement.style.background = getRandomColor();

}, 1000);

let input = document.querySelector('input');

input.addEventListener('input', event => {
    console.log(event);
    heading.innerText = input.value.split('').reverse().join('');
});

