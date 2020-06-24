import './styles.scss';

const domQueryStrings = {
  square: document.querySelectorAll('.square'),
  displayRandomColor: document.querySelector('.displayRandomColor'),
  displayResult: document.querySelector('.bar span'),
  h1Bar: document.querySelector('h1'),
  buttonNewColor: document.querySelector('button.newColors'),
};

/*
const colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(255, 0, 255)',
  'rgb(0, 255, 0)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)',
];
*/


class Colorrandom {

  generateColors(anzahl) {
    this.color = [];
    for (let i = 0; i < anzahl; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      this.color.push(`rgb(${r}, ${g}, ${b})`);
    }
    return this.color;
  }

  pickColor() {
    const random = Math.floor(Math.random() * this.color.length);
    return this.color[random];
  }

}

// Variables
const colorrandom = new Colorrandom();
let colors = colorrandom.generateColors(6);
let guessColor = colorrandom.pickColor();
domQueryStrings.displayRandomColor.textContent = guessColor;

domQueryStrings.buttonNewColor.addEventListener('click', () => {
  // generate new Colors
  colors = colorrandom.generateColors(6);

  // change Display Color to match picket Color!!!!
  guessColor = colorrandom.pickColor();
  
  // show new guessColor
  domQueryStrings.displayRandomColor.textContent = guessColor;
  // change color of squares (reset new colors)
  for (let i = 0; i < domQueryStrings.square.length; i++) {
    domQueryStrings.square[i].style.backgroundColor = colors[i];
    domQueryStrings.h1Bar.style.backgroundColor = 'black';
  }
  domQueryStrings.displayResult.textContent = 'Score';
});

domQueryStrings.square.forEach((item, index) => {
  item.style.backgroundColor = colors[index];

  item.addEventListener('click', function () {
    const clickedColor = this.style.backgroundColor;

    if (guessColor === clickedColor) {
      domQueryStrings.displayResult.textContent = 'Right Color';
      for (let i = 0; i < domQueryStrings.square.length; i++) {
        domQueryStrings.square[i].style.backgroundColor = guessColor;
        domQueryStrings.h1Bar.style.backgroundColor = guessColor;
      }
    } else {
      domQueryStrings.displayResult.textContent = 'Wrong Color';
      // item.style.backgroundColor = 'black';
      this.style.backgroundColor = 'black';
    }
  });
});