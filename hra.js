console.log('test');

let currentPlayer = 'circle';

const tlacitko1 = document.querySelector('.button1');
const tlacitko2 = document.querySelector('.button2');
const tlacitko3 = document.querySelector('.button3');
const tlacitko4 = document.querySelector('.button4');
const tlacitko5 = document.querySelector('.button5');
const tlacitko6 = document.querySelector('.button6');
const tlacitko7 = document.querySelector('.button7');
const tlacitko8 = document.querySelector('.button8');
const tlacitko9 = document.querySelector('.button9');
const tlacitko10 = document.querySelector('.button10');

let buttonCircleElm = document.querySelector('.button__circle');

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    currentPlayer = 'cross';
    // buttonCircleElm.classList.add('board__field--circle');
  } else {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    currentPlayer = 'circle';
  }
};

tlacitko1.addEventListener('click', addClass);
tlacitko2.addEventListener('click', addClass);
tlacitko3.addEventListener('click', addClass);
tlacitko4.addEventListener('click', addClass);
tlacitko5.addEventListener('click', addClass);
tlacitko6.addEventListener('click', addClass);
tlacitko7.addEventListener('click', addClass);
tlacitko8.addEventListener('click', addClass);
tlacitko9.addEventListener('click', addClass);
tlacitko9.addEventListener('click', addClass);
tlacitko10.addEventListener('click', addClass);
