## Sudoku Solver

Su Doku (Japanese meaning number place) is the name given to a popular puzzle concept. Its origin is unclear, but credit must be attributed to Leonhard Euler who invented a similar, and much more difficult, puzzle idea called Latin Squares. The objective of Su Doku puzzles, however, is to replace the blanks (or zeros) in a 9 by 9 grid in such that each row, column, and 3 by 3 box contains each of the digits 1 to 9. Below is an example of a typical starting puzzle grid and its solution grid.

```txt
# question
0 0 3|0 2 0|6 0 0
9 0 0|3 0 5|0 0 1
0 0 1|8 0 6|4 0 0
-----------------
0 0 8|1 0 2|9 0 0
7 0 0|0 0 0|0 0 8
0 0 6|7 0 8|2 0 0
-----------------
0 0 2|6 0 9|5 0 0
8 0 0|2 0 3|0 0 9
0 0 5|0 1 0|3 0 0

# solution
4 8 3|9 2 1|6 5 7
9 6 7|3 4 5|8 2 1
2 5 1|8 7 6|4 9 3
-----------------
5 4 8|1 3 2|9 7 6
7 2 9|5 6 4|1 3 8
1 3 6|7 9 8|2 4 5
-----------------
3 7 2|6 8 9|5 1 4
8 1 4|2 5 3|7 6 9
6 9 5|4 1 7|3 8 2
```

A well constructed Su Doku puzzle has a unique solution and can be solved by logic, although it may be necessary to employ "guess and test" methods in order to eliminate options (there is much contested opinion over this). The complexity of the search determines the difficulty of the puzzle; the example above is considered easy because it can be solved by straight forward direct deduction.

## Target

The 6K text file, [sudoku.txt][sudokuFile], contains fifty different Su Doku puzzles ranging in difficulty, but all with unique solutions (the first puzzle in the file is the example above).

Step 1 - Solve the puzzle (fill in all numbers in the grid)

Step 2 - Find the sum of the first three numbers in the top row (from the left). For example, in the solution grid above, the sum is 4+8+3=15

Step 3 - Find this sum for each of the 50 puzzles

## How to run

### Step 1
Open terminal

### Step 2
Write commands below in your terminal

```txt
1. cd root_directory # to go to project directory
2. yarn install # install dependencies
3. node index.js # run node server

```
After the terminal output this
```txt
    Server started on localhost:3000
```
then you can open browser and go to [http://localhost:3000] to see the output as html page

## Authors

* **Lathif Jumatiawan** - [abdlateef](https://github.com/AbdLateef)

[forkFromGithub]:https://github.com/en-trak/backend-pre-interview/fork
[createAccount]:https://github.com/join
[golangSite]:https://golang.org
[golangciLint]:https://github.com/golangci/golangci-lint
[eslintSite]:https://eslint.org
[yarnSite]:https://classic.yarnpkg.com/lang/en/
[jsSite]:https://nodejs.org
[tsSite]:https://typescriptlang.org
[coffeeSite]:https://coffeescript.org
[sudokuFile]:sudoku.txt
[http://localhost:3000]:http://localhost:3000