class TicTacToe {
    constructor() {
      this.currentsym = 'x';
      this.winner = null;
      this._isFinished = false;
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
        return this.currentsym
    }

    nextTurn(rowIndex, columnIndex) {
        
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

    }
}

module.exports = TicTacToe;
