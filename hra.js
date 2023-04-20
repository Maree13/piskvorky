import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';
console.log('test');

let currentPlayer = 'circle';

// let buttonCircleElm = document.querySelector('#playing');
const ikonCircle = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg>`;

const ikonCross = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute" fill="#ffffff" stroke-width="0" stroke="#ff0000"></path> </svg>`;

//Je to uplne priserny kod, ale neslo mi prepojit svg ikonku s buttonCircleElm pomocou classList-u, tak som to vyriesila takto. :(

const buttonCircleElm = document.querySelector('#playing');

const addClass = (event, i) => {
  herniPole[i] = currentPlayer === 'circle' ? 'o' : 'x';
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    currentPlayer = 'cross';
    console.log(buttonCircleElm);
    buttonCircleElm.innerHTML = ikonCross;
    herniPole[i] = 'o';
  } else {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    currentPlayer = 'circle';
    console.log(buttonCircleElm);
    buttonCircleElm.innerHTML = ikonCircle;
    herniPole[i] = 'x';
  }

  const vitez = findWinner(herniPole);
  if (vitez === 'o' || vitez === 'x') {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${vitez}.`);
      location.reload();
    }, 200);
  }
};

//Vyber všechna políčka pomocí document.querySelectorAll.
const policko = document.querySelectorAll('.grid__button');

//Metodou forEach je všechny projdi a přidej jim posluchač události na kliknutí. Zařiď, aby kliknutí zavolalo funkci, kterou máš nachystanou z předchozího úkolu.

policko.forEach((e, index) => {
  e.addEventListener('click', (event) => addClass(event, index));
});

const herniPole = Array.from(policko).fill('_'); // Vytvorene pole '_'
console.log(herniPole);

const testMap = herniPole.map((p) => {
  if (p.classList.contains('board__field--circle')) {
    return 'o';
  } else if (p.classList.contains('board__field--cross')) {
    return 'x';
  } else {
    return '_';
  }
});

// const vitez = findWinner(herniPole);
// if (vitez === 'o' || vitez === 'x') {
//   setTimeout(() => {
//     alert(`Vyhrál hráč se symbolem ${vitez}.`);
//     location.reload();
//   }, 200);
// }
