class Sudoku {

    constructor(board_string) {
        this.board = this.createBoard(board_string)
        this.emptyPlaces = this.findEmptyPlaces() 
    }

    createBoard(board_string) {
        let theBoard = []
        let indexStr = 0;
        for (let i = 0; i < 9; i++) {
            let row = [];
            for (let j = 0; j < 9; j++) {
                row.push(Number(board_string[indexStr]))
                indexStr++;
            }
            theBoard.push(row)
        }
        return theBoard
    }

    findEmptyPlaces() {
        let emptyPlaces = []
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j] === 0) emptyPlaces.push([i, j])
            }
        }
        return emptyPlaces
    }

    checkHorizontal(indexRow, number) {
        for (let i = 0; i < this.board[indexRow].length; i++) {
            if (this.board[indexRow][i] === number) return false
        }
        return true
    }

    checkVertical(indexCol, number) {
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i][indexCol] === number) return false
        }
        return true
    }

    checkBlock(indexRow, indexCol, number) {
        let row = Math.floor(indexRow / 3) * 3
        let col = Math.floor(indexCol / 3) * 3
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i + row][j + col] === number) return false
            }
        }
        return true
    }

    isValidPlace(indexRow, indexCol, number) {
        let isHorizontalValid = this.checkHorizontal(indexRow, number)
        let isVerticalValid = this.checkVertical(indexCol, number)
        let isBlockValid = this.checkBlock(indexRow, indexCol, number)
        if (isHorizontalValid && isVerticalValid && isBlockValid) return true
        return false
    }
    
    isSolved() {
        for (let i = 0; i < this.board.length; i++) {
          for (let j = 0; j < this.board[i].length; j++) {
            if (this.board[i][j] === 0) return false
          }
        }
        return true
    }

    solve() {
        let indexOnEmptyPlaces = 0

        while (!this.isSolved()) {
            let row = this.emptyPlaces[indexOnEmptyPlaces][0]
            let col = this.emptyPlaces[indexOnEmptyPlaces][1]
            let num = this.board[row][col]
          
            while (num < 10) {
                if (this.isValidPlace(row, col, num)) {
                    this.board[row][col] = num
                    indexOnEmptyPlaces++
                    break
                }
                if (num === 9) {
                    this.board[row][col] = 0
                    indexOnEmptyPlaces--
                }
                num++
            }
        }
    }

    printBoard(solving) {
        var tmp = this.board[0][0]
        let displayStr = `-------------------------\n`
        for (let i = 0; i < this.board.length; i++) {
            let row = '| '
            for (let j = 0; j < this.board[i].length; j++) {
                if(i == 0 && j > 0 && j < 3) tmp = this.board[i][j] + tmp
                row += this.board[i][j]
                if (j === 2 || j === 5 || j === 8) {
                    row += ' | '
                } else {
                    row += ' '
                }
            }
            displayStr += `${row}\n`
          
            if (i === 2 || i === 5 || i === 8) {
                displayStr += `-------------------------\n`
            }
        }
        console.log(displayStr)
        if(solving) console.log('Sum = ', tmp)
    }

}

module.exports = Sudoku
