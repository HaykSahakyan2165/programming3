var LiveForm = require("./LiveForm");
var random = require("./random");
var Grass = require("./Grass")


module.exports = class GrassCreater extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.multiply = 0;
        this.index = 4

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 


  

    mul() {
        this.multiply++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        

        if (newCell && this.multiply >= 1 && weather != "Dzmer") {
          
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 1;
            let grassCreater = new Grass(x, y);
            grassCreaterArr.push(grassCreater);
            this.multiply = 0;
        }
    }
}

