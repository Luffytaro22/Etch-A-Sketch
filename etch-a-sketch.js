const input = document.querySelector('input');
const container = document.querySelector('#container');
const buttonRed = document.querySelector('#buttonRed');
const buttonBlue = document.querySelector('#buttonBlue');
const buttonYellow = document.querySelector('#buttonYellow');
const undo = document.querySelector('#undo');
const colorInput = document.querySelector('.color-input');
//Crea los divs dentro del contenedor.

function createDivs(inputValue) {
  for(let i = 1; i <= inputValue*inputValue; i++){
    const div = document.createElement('div');
    div.classList.add('grids');
    div.style.background='white';
    container.appendChild(div);
  }
}



input.addEventListener('change', () => {
  inputValue = input.valueAsNumber;
  if(inputValue > 100){
    alert('ERROR THE NUMBER IS TOO BIG');
    return;
  }
  createDivs(inputValue); 
  container.style.gridTemplateColumns = `repeat(${inputValue}, ${500/inputValue}px)`;
  container.style.gridAutoRows = `minmax(${100/inputValue}px, auto)`;

  const trails = document.querySelectorAll(".grids");

  function addColor(color){
    trails.forEach((div) => {
      div.addEventListener('mouseover', () => {
        if (mouseDown) {
          div.style.background=color;
        }
      });
    });
  }


  let mouseDown = false; // variable para indicar si el mouse está presionado

  // evento que activa el cambio de color para todos los elementos
  document.addEventListener('mousedown', () => {
    mouseDown = true;
  });

  // evento que detiene el cambio de color para todos los elementos
  document.addEventListener('mouseup', () => {
    mouseDown = false;
  });

  addColor('black');
// evento que activa el cambio de color solo para el elemento actual
colorInput.addEventListener('input', (element) => {
  addColor(element.target.value);
});

buttonRed.addEventListener('click', (element) => {
  addColor(element.target.value);
});

buttonBlue.addEventListener('click', (element) => {
  addColor(element.target.value);
});

buttonYellow.addEventListener('click', (element) => {
  addColor(element.target.value);
});
    
undo.addEventListener('click', (element) => {
  addColor(element.target.value);
});

//Evento que escucha cada vez que se se altera el input y elimina los divs creados.
  input.addEventListener('input', () => {
    trails.forEach((div) => {
      container.removeChild(div);
    });
  });

});

let clear = document.querySelector('#clear');
clear.addEventListener('click',() => {
    location.reload();
})
  



