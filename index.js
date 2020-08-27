const fs = require("fs")
const sudokuClass = require('./sudoku')
var text = fs.readFileSync("./sudoku.txt", "utf-8")
var arrAllSudoku = text.split('\n')
var size = 9
var arrayOfArrays = []

for (var i = 0; i < arrAllSudoku.length; i += size) {
     arrayOfArrays.push(arrAllSudoku.slice(i,i+size))
}

for (var i = 0; i < arrayOfArrays.length; i++) {
    var board = arrayOfArrays[i].join('')
    console.time('Time execution ')
    var sudoku = new sudokuClass(board)
    console.log('-------BOARD '+ (i+1) +'--------')
    console.log('not solved')
    sudoku.printBoard(false)
    sudoku.solve() 
    console.log('solved')
    sudoku.printBoard(true)
    console.timeEnd('Time execution ')
    console.log('\n\n')
}