    
const gameBoard = [[], [], [], [], [], [], [], [], [], [], [], []];  
   

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

                if(gameBoard[0][0].color != selectedCell.color) {
                    
                    let tmp = gameBoard[0][0].color;
                    gameBoard[0][0].color = selectedCell.color;
                    selectedCell.color = tmp;

                }

            });

        }
    }
 
    const findCellById = (id) => {
        for(y = 0; y < 12; y++) {
            for(x = 0; x < 12; x++) {
                if(gameBoard[x][y].id == id) {
                    return gameBoard[x][y];
                }
            }
        }
    }


    $('button').on('click', () => {
        location.reload();
    });

  

});




        