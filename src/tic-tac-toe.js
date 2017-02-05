class TicTacToe {
    constructor() {
      this.currentsym = 'x';
      this.winner = null;
      this.isFinished = false;
      this.count = 0;
      this.field = [];
      for(var i = 0; i < 3; i++){
          this.field[i] = [];
          for (var j = 0; j < 3; j++){
              this.field[i][j] = null;
          }
        }
    }

    getCurrentPlayerSymbol() {
      return this.currentsym;
    }

    nextTurn(rowIndex, columnIndex) {
      if (rowIndex > 2 || rowIndex < 0 || columnIndex > 2 || columnIndex < 0){
        return null;
      } else {
        if(this.field[rowIndex][columnIndex] === null){
          this.field[rowIndex][columnIndex] = this.currentsym;
          this.count++;
            } else {
                return null;
            }

        for (var i = 0; i < 3; i++){
          if((this.field[i][0] == this.currentsym) && (this.field[i][1] == this.currentsym) && (this.field[i][2] == this.currentsym))||
          ((this.field[0][i] == this.currentsym) && (this.field[1][i] == this.currentsym) && (this.field[2][i] == this.currentsym))||
          ((this.field[0][0] == this.currentsym) && (this.field[1][1] == this.currentsym) && (this.field[2][2] == this.currentsym))||
          ((this.field[2][0] == this.currentsym) && (this.field[1][1] == this.currentsym) && (this.field[0][2] == this.currentsym)){
            this.isFinished = true;
            this.winner = this.currentsym;
          }
        }
        if(this.currentsym === 'x'){
          this.currentsym = 'o';
        } else {
          this.currentsym = 'x';
        }
      }
    }

    isFinished() {
      if (this.winner || this.noMoreTurns()){
            return true;
        }
        else return false;
    }

    getWinner() {
      return this.winner;
    }

    noMoreTurns() {
      if (this.count === 9){
            return true;
        }
      else return false;
    }

    isDraw() {
      if((this.isFinished == true) && (this.winner == null)){
        return true;
      }else{
        return false;
      }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
