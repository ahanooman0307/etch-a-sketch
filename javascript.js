//html variables
const grid = document.querySelector(".grid");
const eraser = document.querySelector(".eraser");
const chosenColor = document.querySelector("#color");
const chosenSize = document.querySelector("#range");
const showSize = document.querySelector(".text");
const clear = document.querySelector(".clear")
const rainbowColor = document.querySelector(".rainbow");
const header = document.querySelector(".header");


//new variables
let gridSize = 16;
let color = "black";
let rainbow = false;

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
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; //gridSize variable is length and height of grid
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    colorGrid();
}

function colorGrid(){  //function to change color while hovering
    const box = document.querySelectorAll('.grid-item');
    box.forEach((m) => { // I used the .forEach method to iterate through each box

      // and for each box I add a 'click' listener
      m.addEventListener('mouseover', () => {
        if(rainbow == false){
        m.style.cssText = `background-color: ${color}`;
        header.style.cssText = `color: black`;
        }
        else if (rainbow == true){
        let red = [Math.floor(Math.random()*256)];
        let green = [Math.floor(Math.random()*256)];
        let blue = [Math.floor(Math.random()*256)];
        m.style.cssText = `background-color: rgb(${red}, ${green}, ${blue})`; //create rainbow effect
        header.style.cssText = `color: rgb(${red}, ${green}, ${blue})`;
        }
      });
      
    });
    }
    
function changeSize(){ //allows user to change size of grid
    const box = document.querySelectorAll('.grid-item');
    box.forEach(box => box.remove()); //deletes old grid
    gridSize = chosenSize.value;
    showSize.textContent = `${gridSize} x ${gridSize}` //show size on webpage
    createGrid(gridSize); //make new grid with new variables
    colorGrid();
}

function clearGrid(){
    const box = document.querySelectorAll('.grid-item');
    box.forEach(box => box.style.cssText = "background-color: white");
}

createGrid(gridSize);

//change size of grid
chosenSize.addEventListener('input', changeSize);

//clear grid
clear.addEventListener('click', clearGrid);
  
//change color
chosenColor.addEventListener('input', () => { color = chosenColor.value;
chosenColor.style.cssText = `background-color: ${color}`;
rainbow = false;});
//erase color
eraser.addEventListener('click', () => { color = "white"; });
//activate rainbow
rainbowColor.addEventListener('click', () =>{
    if(rainbow == false){
        rainbow = true;
    }
    else rainbow = false;
})
