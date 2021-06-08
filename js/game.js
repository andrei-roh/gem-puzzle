let arr = [], emptyRow, emptyColumn;
let playerMoves = 0;
let score = [];
var victoryMessage = document.getElementById('victory');
var top_score = document.getElementById('top_score')
var watchTime = document.getElementById('watch')
moves.innerHTML =`Moves: 0`;
time.innerHTML =`Time: `;

//keysound
function soundHandler(soundSource) {
	const keySound = document.createElement('audio');
	keySound.src = soundSource;
	keySound.play();
 }

let startBoard = {
	setRows: 4,
	setColumns: 4,
	setLimit: 6,
	setMultiplier: 4,
	numberOfCombinations: 1600,
	setSize: 500,
}

function swap(arr, i1, j1, i2, j2) {
	inputArray = arr[i1][j1];
	arr[i1][j1] = arr[i2][j2];
	arr[i2][j2] = inputArray;
}

window.onload = function() {
	setPopUpHide();
	var box = document.getElementById('box');
	setCreateNumbers();
	document.getElementById('reset').onclick = () => {
		setCreateNumbers();
		setClearClock();
		startTimer();
	}
}

function cellClick(event) {
	var event = event || window.event,
		element = event.srcElement || event.target,
		emptyElement = document.getElementById(emptyRow + " " + emptyColumn),
		//get the number of the row and column at the intersection of which the cell is located.
		i = element.id.charAt(0),
		j = element.id.charAt(2);
		/*if empty cell is located in the same row or the same column with the cell that was clicked,
		then their contents are swapped*/
	if((i == emptyRow && Math.abs(j - emptyColumn) == 1) || (j == emptyColumn && Math.abs(i - emptyRow) == 1)) {
		document.getElementById(emptyRow + " " + emptyColumn).innerHTML = element.innerHTML;
		element.innerHTML = "";
		element.style.backgroundColor = "#56526a";
		//changing the color of a previously empty element
		emptyElement.style.backgroundColor = "#4d495f";
		//remember a position of the empty cell
		emptyRow = i;
		emptyColumn = j;
		var checkVictory = true;
		//write moves
		playerMoves += 1;
		moves.innerHTML =`Moves: ${playerMoves}`;
		//moving sound
		soundHandler('./assets/sounds/tink.wav');
		//checked a winning combination
		for(let i = 0; i < startBoard.setRows; i += 1) {
			for(let j = 0; j < startBoard.setColumns; j += 1) {
				if(i + j != startBoard.setLimit && document.getElementById(i + " " + j).innerHTML != i * startBoard.setMultiplier + j + 1) {
					checkVictory = false;
					break;
				}
			}
		}
		if(checkVictory) {
			victoryMessage.innerHTML = `Congratulations! You solved the puzzle in ${watchTime.value} and ${playerMoves} moves`;
			localStorage.setItem('result', victoryMessage.innerHTML);
			score.length <= 9
				? score.push(localStorage.getItem('result').substring(42))
				: (
					score.pop(),
					score.push(localStorage.getItem('result').substring(42))
				)
			top_score.innerHTML = score.join('<br><br>');
			setPopUpShow();
			setClearClock();
			setCreateNumbers();
		}
	}
}

//added array with N elements
function setCreateNumbers() {
	playerMoves = 0;
	for(rows = 0; rows < startBoard.setRows; rows += 1) {
		arr[rows] = []
		for(columns = 0; columns < startBoard.setColumns; columns += 1) {
			rows + columns != startBoard.setLimit
				? arr[rows][columns] = rows * startBoard.setMultiplier + columns + 1
				: arr[rows][columns] = "";
		}
	}

//mix created elements on array
	emptyRow = (startBoard.setRows - 1);
	emptyColumn = (startBoard.setRows - 1);
	for(let i = 0; i < startBoard.numberOfCombinations; i += 1)
		switch(Math.round((startBoard.setRows - 1) * Math.random())) {
			// up
			case 0:
			if(emptyRow != 0)
			swap(arr, emptyRow, emptyColumn, --emptyRow, emptyColumn);
			break;
			// right
			case 1:
			if(emptyColumn != (startBoard.setRows - 1))
			swap(arr, emptyRow, emptyColumn, emptyRow, ++emptyColumn);
			break;
			// down
			case 2:
			if(emptyRow != (startBoard.setRows - 1))
			swap(arr, emptyRow, emptyColumn, ++emptyRow, emptyColumn);
			break;
			// left
			case 3:
			if(emptyColumn != 0)
			swap(arr, emptyRow, emptyColumn, emptyRow, --emptyColumn);
			break;
		}
		//create a board
		var board = document.createElement("board");
		board.style.display = "flex";
		board.style.flexDirection = "column";
		board.style.justifyContent = "center";
		board.style.alignItems = "center";
		board.style.width = startBoard.setSize + "px";
		board.style.height = startBoard.setSize + "px";
		for(let i = 0; i < startBoard.setRows; i += 1) {
			//added rows in the table
			var row = document.createElement("row");
			row.id = "row";
			row.style.display = "flex";
			row.style.flexDirection = "row"
			for(let j = 0; j < startBoard.setColumns; j += 1) {
				//create cells in the table
				var cell = document.createElement("cell");
				cell.style.display = "flex";
				cell.style.justifyContent = "center";
				cell.style.alignItems = "center";
				cell.style.color = "white";
				cell.style.border = "solid white 1px"
				cell.style.fontSize = "40px";
				cell.style.minWidth = "55px";
				cell.style.minHeight = "55px";
				cell.style.margin = "2px";
				cell.style.backgroundColor = "#4d495f";
				cell.id = i + " " + j;
				//bind function on click to a cell
				cell.onclick = cellClick;
				//recording element in cell
				cell.innerHTML = arr[i][j];
				//color of the first empty cell
				cell.innerHTML === '' ? cell.style.backgroundColor = "#56526a" : null
				//added row in table
				row.appendChild(cell);
			}
			board.appendChild(row);
		}
	//check if the element has a table
	if(box.childNodes.length == 1) {
		box.removeChild(box.firstChild);
	}
	box.appendChild(board);
}
