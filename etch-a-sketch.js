const input = document.querySelector('input');
const container = document.querySelector('#container');
let inputValue = 0;
//Crea los divs dentro del contenedor.
function createDivs(inputValue) {
  for(let i = 1; i < inputValue*inputValue; i++){
    const div = document.createElement('div');
    div.classList.add('grids');
    container.appendChild(div);
  }
}

input.addEventListener('change', () => {
  let aux = inputValue;
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

  if(inputValue == aux){

  }else{
    trails.forEach((div) => {
      div.addEventListener('mouseover', () => {
        if (mouseDown) {
          div.classList.add('clicked');
        }
      });
    });
  }
  // evento que activa el cambio de color solo para el elemento actual
  

  

});
let clear = document.querySelector('#clear');
clear.addEventListener('click',() => {
    location.reload();
})
  



