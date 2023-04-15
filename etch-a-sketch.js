let size = prompt("Choose a side, maximun 100");

if(size <= 100){
    for (let i = 1; i <= size*size; i++) {
        let div = document.createElement('div');
        var currentDiv = document.getElementById("container");
        div.classList.add('grids');
        container.appendChild(div);
      }
}else{
    alert("ERROR");
}

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
trails.forEach((div) => {
  div.addEventListener('mouseover', () => {
    if (mouseDown) {
      div.classList.add('clicked');
    }
  });
});

container.style.gridTemplateColumns = `repeat(${size}, ${500/size}px)`;
  container.style.gridAutoRows = `minmax(${100/size}px, auto)`;

let clear = document.querySelector('#clear');
clear.addEventListener('click',() => {
    location.reload();
})
  



