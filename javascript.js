//html variables
const grid = document.querySelector(".grid");
const eraser = document.querySelector(".eraser");
const chosenColor = document.querySelector("#color");
const chosenSize = document.querySelector("#range");
//new variables
let gridSize = 16;
let color = "black";



//function to create grid
function createGrid(gridSize){
    let area = gridSize * gridSize; //area variable is # of boxes
    for(let i = 0; i < area; i++){
        const box = document.createElement('div');
        box.classList.toggle('grid-item');
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
chosenSize.addEventListener('input', () =>{
    // box.classList.toggle('grid-item');
    // grid.removeChild('grid-item');
    gridSize = chosenSize.value;
    createGrid(gridSize);
})

const box = document.querySelectorAll('.grid-item');
// I used the .forEach method to iterate through each box
box.forEach((m) => {
  // and for each box I add a 'click' listener
  m.addEventListener('mousedown', () => {
    m.style.cssText = `background-color: ${color}`;
  });
});
