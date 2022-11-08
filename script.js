const container = document.querySelector('#container');
let cell;
let target;
let counter = 1;

const startNow = document.querySelector('.startNow');
startNow.addEventListener('click', promptGrid);

const reset = document.querySelector('.resetBtn');
reset.addEventListener('click', function(){
    window.location.reload();
    });

function promptGrid() {
    
    if (counter <= 1) {
        let number = prompt("Choose a grid size between 8 and 64", 16);
        if (number >= 8 && number <=64){
            makeGrid(number, number);
            counter += 1;
            }
            else{
                do{
                    number = prompt("Invalid size! Choose a grid size between 8 and 64");
                }
                while(number < 5 || number > 64);
                makeGrid(number, number);
            }
    }else{
        alert("First you need to reset!");
    }

}

function makeGrid(numRow, numCol) {
    container.style.setProperty('--numRows', numRow);
    container.style.setProperty('--numCols', numCol);
    for (let r = 0; r < numRow; r++){
        makeCell(numCol);
    }
}

function makeCell(numCell){
    for (let c = 0; c < numCell; c++){
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

function changeColor (target){
    target.style.backgroundColor = 'black';
}

container.addEventListener('mouseover', function(e){
    target = e.target;

    if (target.matches("div.cell")){
        changeColor(target);
    }
});