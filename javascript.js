//html variables
const grid = document.querySelector(".grid");
const eraser = document.querySelector(".eraser");
const chosenColor = document.querySelector("#color");
const chosenSize = document.querySelector("#range");
const showSize = document.querySelector(".text");
const clear = document.querySelector(".clear")
//new variables
let gridSize = 16;
let color = "black";





//function to create grid
function createGrid(gridSize){
    let num = 1;
    let area = gridSize * gridSize; //area variable is # of boxes
    for(let i = 0; i < area; i++){
        const box = document.createElement('div');
        box.classList.toggle('grid-item');
        box.setAttribute('id', `${num}`);
        num++;
        grid.appendChild(box);
    }
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)` //gridSize variable is length and height of grid
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
}

function colorGrid(color){

}






createGrid(gridSize);


chosenColor.addEventListener('input', () =>{
    color = chosenColor.value;
});
eraser.addEventListener('click', () =>{
    color = "white";
});

const box = document.querySelectorAll('.grid-item');
// I used the .forEach method to iterate through each box


chosenSize.addEventListener('input', () =>{

        
        const box = document.querySelectorAll('.grid-item');
        box.forEach(box => box.remove());
        gridSize = chosenSize.value;
        showSize.textContent = `${gridSize} x ${gridSize}`
        createGrid(gridSize);
    })

box.forEach((m) => {
  // and for each box I add a 'click' listener
  m.addEventListener('click', () => {
    m.style.cssText = `background-color: ${color}`;
  });
  
});

clear.addEventListener('click', () =>{
    const box = document.querySelectorAll('.grid-item');
    box.forEach(box => box.style.cssText = "background-color: white");
  
})
