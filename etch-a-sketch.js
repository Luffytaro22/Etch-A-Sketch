const input = document.querySelector('input');
const container = document.querySelector('#container');
const buttonRed = document.querySelector('#buttonRed');
const buttonBlue = document.querySelector('#buttonBlue');
const buttonYellow = document.querySelector('#buttonYellow');
const undo = document.querySelector('#undo');
//Crea los divs dentro del contenedor.
function createDivs(inputValue) {
  for(let i = 1; i <= inputValue*inputValue; i++){
    const div = document.createElement('div');
    div.classList.add('grids');
    container.appendChild(div);
  }
}

input.addEventListener('change', () => {
  inputValue = input.valueAsNumber;
  createDivs(inputValue); 
  container.style.gridTemplateColumns = `repeat(${inputValue}, ${500/inputValue}px)`;
  container.style.gridAutoRows = `minmax(${100/inputValue}px, auto)`;

  const trails = document.querySelectorAll(".grids");

  let mouseDown = false; // variable para indicar si el mouse está presionado

  // evento que activa el cambio de color para todos los elementos
  document.addEventListener('mousedown', () => {
    mouseDown = true;
  });

  // evento que detiene el cambio de color para todos los elementos
  document.addEventListener('mouseup', () => {
    mouseDown = false;
  });

  
// evento que activa el cambio de color solo para el elemento actual
buttonRed.addEventListener('click', () => {
  trails.forEach((div) => {
    div.addEventListener('mouseover', () => {
      if (mouseDown) {
        div.style.background='red';
      }
    });
  });
});
buttonBlue.addEventListener('click', () => {
  trails.forEach((div) => {
    div.addEventListener('mouseover', () => {
      if (mouseDown) {
        div.style.background='blue';
      }
    });
  });
});
buttonYellow.addEventListener('click', () => {
  trails.forEach((div) => {
    div.addEventListener('mouseover', () => {
      if (mouseDown) {
        div.style.background='yellow';
      }
    });
  });
});
    trails.forEach((div) => {
      div.addEventListener('mouseover', () => {
        if (mouseDown) {
          div.style.background='black';
        }
      });
    });
  undo.addEventListener('click', () => {
    trails.forEach((div) => {
      div.addEventListener('mouseover', () => {
        if (mouseDown) {
          div.style.background='white';
        }
      });
    });
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
  



