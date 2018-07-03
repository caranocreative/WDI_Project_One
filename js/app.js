$(document).ready(function() {   
    
    // candidate random colors!
    colorOptions = ['#537938', '#F9D42C', '#F17105', '#D11149', '#6610F2', '#1A8FE3'];

    for(i = 1; i <= 144; i++) {                             
        let name = "cell" + i;
        $(".grid-container").append('<div class="grid-item" id="' + name +'"></div>'); 

        // selecting a random number between zero and the length of our random color array
        let color = Math.floor(Math.random() * colorOptions.length);


        // colorOptions[color] = random selection from our color array
        $("#" + name).css('background-color', colorOptions[color]);

        $('#' + name).on('click', function(){
            console.log("Clicked: " + name);
        });
    }


    const gameBoard = [[], [], [], [], [], [], [], [], [], [], [], []]; 
    console.log(gameBoard);

  
    class cell {
        constructor(x, y, color, Id) {
           this.x = x;
           this.y = y;
           this.color = color;
           this.Id = Id
            
        };

        xCoord () {
            
        };

        yCoord () {

        };

        sqColor () {

        };


    };






        for(i = 0; i < 11; i++) {
           for(j = 0; j < 11; j++) {
              gameBoard[i][j] = new cell(i, j);
           }
        }

        for(i = 0; i <= this.x; i++) {
            for (j = 0; j <= this.y; i++) {
                console.log(i, j);
            }
        };


});


        