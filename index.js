const fs = require("fs")
const http = require('http')
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
app.set('view engine', 'ejs');
app.set('views', 'views');

const sudokuClass = require('./sudoku')
var text = fs.readFileSync("./sudoku.txt", "utf-8")
var arrAllSudoku = text.split('\n')
var size = 9
var arrayOfArrays = []
var boardToSend = []
var boardToSendSolved = []

for (var i = 0; i < arrAllSudoku.length; i += size) {
    arrayOfArrays.push(arrAllSudoku.slice(i,i+size))
}
//console.log(arrayOfArrays)
for (var i = 0; i < arrayOfArrays.length; i++) {
    var sudoku = new sudokuClass(arrayOfArrays[i].join(''))
    boardToSend.push(sudoku.board)
}
for (var i = 0; i < arrayOfArrays.length; i++) {
    console.time('Time execution ')
    var sudoku = new sudokuClass(arrayOfArrays[i].join(''))
    console.log('-------BOARD '+ (i+1) +'--------')
    console.log('not solved')
    sudoku.printBoard(false)
    sudoku.solve()
    boardToSendSolved.push(sudoku.board) 
    console.log('solved')
    sudoku.printBoard(true)
    console.timeEnd('Time execution ')
    console.log('\n\n')
}

app.get('/', function(req, res) {
    res.render('index', {unsolvedBoards: boardToSend, solvedBoards: boardToSendSolved})
})
app.listen(3000, () => {
    console.log('Server started on localhost:3000')
})

// app.get('/',function(req,res) {
//     res.end(
//         ejs.render()
//     )
// })