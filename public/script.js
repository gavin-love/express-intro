const Supersonic = document.querySelector('button');

Supersonic.addEventListener('click', spaceFox);

function spaceFox(event) {
  event.preventDefault();
  event.target.style.backgroundColor = 'lime'
}