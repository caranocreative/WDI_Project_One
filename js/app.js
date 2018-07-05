    
const gameBoard = [[], [], [], [], [], [], [], [], [], [], [], []];  
let matchList = [];
let canList = []; 
let score = 21;

$(document).ready(function() {   

   class cell {
        constructor(x, y, id) {
           this.x = x;
           this.y = y;
           this.id = id;
           this.color = '';
           
           this.generateColor();            
        };

        generateColor () {
            let colorOptions = ['#537938', '#F9D42C', '#F17105', '#D11149', '#6610F2', '#1A8FE3'];
            let color = Math.floor(Math.random() * colorOptions.length);
            this.color = colorOptions[color];
        }

        setCssColor() {
            $('#' + this.id).css('background-color', this.color);
        }
    };
 

    for(y = 0; y < 12; y++) {
        for(x = 0; x < 12; x++) {
            let name = "cell-" + x + "-" + y;
            $(".grid-container").append('<div class="grid-item" id="' + name +'"></div>');
            gameBoard[x][y] = new cell(x, y, name);
            $("#" + name).css('background-color', gameBoard[x][y].color);
            $('#' + name).on('click', function(){
                console.log("Clicked: " + name);
                let selectedCell = findCellById(name);

                if(gameBoard[0][0].color == selectedCell.color) {
                    // put UI element not valid move don't make counter move
                    console.log('Color matches pick another color');
                } else {
                    play(selectedCell.color);
                    if(canList.includes(selectedCell.color)) {
                        console.log('picked valid color');
                        for(let i in matchList) {
                            matchList[i].color = selectedCell.color;
                            matchList[i].setCssColor();
                        }
                        matchList = [];
                        canList = [];
                    }

                }

            });

        }
    };
 
    const findCellById = (id) => {
        for(y = 0; y < 12; y++) {
            for(x = 0; x < 12; x++) {
                if(gameBoard[x][y].id == id) {
                    return gameBoard[x][y];
                    
                }
            }
        }
    };

    const play = (color, id="cell-0-0") => {
        console.log("Player picked color: " + color);
        let cell = findCellById(id);
        matchList.push(gameBoard[0][0]);
        //console.log("We are currently on cell x = " + cell.x + "; y = " + cell.y);
        // if cell.x < 11 then check right!
        
        //RIGHT
        if(cell.x < 11) {
            if(!matchList.includes(gameBoard[cell.x + 1][cell.y])) { 
                if(gameBoard[cell.x + 1][cell.y].color == cell.color) {
                    console.log("Right square matches!");
                    matchList.push(gameBoard[cell.x + 1][cell.y]);
                    play(color, gameBoard[cell.x + 1][cell.y].id);
                } else {
                    console.log("Right square does not match!");
                    if(!canList.includes(gameBoard[cell.x + 1][cell.y].color)) {
                        canList.push(gameBoard[cell.x + 1][cell.y].color);
                        console.log("Just added: " + gameBoard[cell.x + 1][cell.y].color + " to canList");
                    } else {
                        console.log(gameBoard[cell.x + 1][cell.y].color + " already in canList");
                    }
                }
            }
        }   
        //DOWN
        if(cell.y < 11) {
            if(!matchList.includes(gameBoard[cell.x][cell.y + 1])) { 
                if(gameBoard[cell.x][cell.y + 1].color == cell.color) {
                    console.log("Down square matches!");
                    matchList.push(gameBoard[cell.x][cell.y + 1]);
                    play(color, gameBoard[cell.x][cell.y + 1].id);
                } else {
                    console.log("Down square does not match!");
                    if(!canList.includes(gameBoard[cell.x][cell.y + 1].color)) {
                        canList.push(gameBoard[cell.x][cell.y + 1].color);
                        console.log("Just added: " + gameBoard[cell.x][cell.y + 1].color + " to canList");
                    } else {
                        console.log(gameBoard[cell.x][cell.y + 1].color + " already in canList");
                    }
                }
            }
        }
        //LEFT
        if(cell.x > 0){
            if(!matchList.includes(gameBoard[cell.x - 1][cell.y])) { 
                if(gameBoard[cell.x - 1][cell.y].color == cell.color) {
                    console.log("Left square matches!");
                    matchList.push(gameBoard[cell.x - 1][cell.y]);
                    play(color, gameBoard[cell.x - 1][cell.y].id);
                } else {
                    console.log("Left square does not match!");
                    if(!canList.includes(gameBoard[cell.x - 1][cell.y].color)) {
                        canList.push(gameBoard[cell.x - 1][cell.y].color);
                        console.log("Just added: " + gameBoard[cell.x - 1][cell.y].color + " to canList");
                    } else {
                        console.log(gameBoard[cell.x - 1][cell.y].color + " already in canList");
                    }
                }
            }
        }   
        //UP
        if(cell.y > 0){
           if(!matchList.includes(gameBoard[cell.x][cell.y - 1])) { 
                if(gameBoard[cell.x][cell.y - 1].color == cell.color) {
                    console.log("Up square matches!");
                    matchList.push(gameBoard[cell.x][cell.y - 1]);
                    play(color, gameBoard[cell.x][cell.y - 1].id);
                } else {
                    console.log("Up square does not match!");
                    if(!canList.includes(gameBoard[cell.x][cell.y - 1].color)) {
                        canList.push(gameBoard[cell.x][cell.y - 1].color);
                        console.log("Just added: " + gameBoard[cell.x][cell.y - 1].color + " to canList");
                    } else {
                        console.log(gameBoard[cell.x][cell.y - 1].color + " already in canList");
                    }
                }
            } 
        }

    }









    $('.btn').on('click', () => {
        location.reload();
    });

  

});




        