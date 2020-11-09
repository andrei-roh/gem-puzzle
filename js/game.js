var arr = [], box, emptyRow, emptyColumn;
var playerMoves = 0;
var score = [];

//keysound
function soundHandler(soundSource) {
	const keySound = document.createElement('audio');
	keySound.src = soundSource;
	keySound.play();
 }

var moves = document.getElementById('moves');
var victoryMessage = document.getElementById('victory');
var top_score = document.getElementById('top_score')
var watchTime = document.getElementById('watch')
moves.innerHTML =`Moves: 0`;

let startBoard = {
	setRows: 4,
	setColumns: 4,
	setLimit: 6,
	setMultiplier: 4,
	numberOfCombinations: 1600,
	setSize: 500,
}

//change two elements on array
function swap(arr,i1,j1,i2,j2) {
	t = arr[i1][j1];
	arr[i1][j1] = arr[i2][j2];
	arr[i2][j2] = t;
}
window.onload = function() {
	startTimer();
	box = document.getElementById("box");
	createNumbers();
	document.getElementById("reset").onclick = () => {
		createNumbers();
		ClearСlock();
		startTimer();
	}
}

function cellClick(event) {
	var event = event || window.event,
		element = event.srcElement || event.target,
    //get the number of the row and column at the intersection of which the cell is located.
		i = element.id.charAt(0),
		j = element.id.charAt(2);
    /*if empty cell is located in the same row or the same column with the cell that was clicked,
		then their contents are swapped*/

	if((i == emptyRow && Math.abs(j - emptyColumn) == 1) || (j == emptyColumn && Math.abs(i - emptyRow) == 1)){
		document.getElementById(emptyRow + " " + emptyColumn).innerHTML = element.innerHTML;
		element.innerHTML = "";
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
		for(i = 0; i < startBoard.setRows; ++i)
			for(j = 0; j < startBoard.setColumns; ++j)
				if(i + j != startBoard.setLimit && document.getElementById(i + " " + j).innerHTML != i * startBoard.setMultiplier + j + 1){
					checkVictory = false;
					break;
				}
				if(checkVictory) {
					victoryMessage.innerHTML = `Congratulations! You solved the puzzle in ${watchTime.value} and ${playerMoves} moves`;
					localStorage.setItem('result', victoryMessage.innerHTML);
					if (score.length <= 9) {
						score.push(localStorage.getItem('result').substring(42));
					}
					else {
						score.pop();
						score.push(localStorage.getItem('result').substring(42));
					}
					top_score.innerHTML = score.join('<br><br>');
					PopUpShow();
					ClearСlock();
					createNumbers();
				}
	}
}

//added array with N elements
function createNumbers(){
	playerMoves = 0;
	for(rows = 0; rows < startBoard.setRows; ++rows){
		arr[rows] = []
		for(columns = 0; columns < startBoard.setColumns; ++columns){
			if(rows + columns != startBoard.setLimit)
				arr[rows][columns] = rows * startBoard.setMultiplier + columns + 1;
			else
				arr[rows][columns] = "";
		}
	}

//mix created elements on array
	emptyRow = (startBoard.setRows - 1);
	emptyColumn = (startBoard.setRows - 1);
	for(i = 0; i < startBoard.numberOfCombinations; ++i)
		switch(Math.round((startBoard.setRows - 1) * Math.random())){
      // up
			case 0: if(emptyRow != 0) swap(arr,emptyRow,emptyColumn,--emptyRow,emptyColumn); break;
      // right
			case 1: if(emptyColumn != (startBoard.setRows - 1)) swap(arr,emptyRow,emptyColumn,emptyRow, ++emptyColumn); break;
      // down
			case 2: if(emptyRow != (startBoard.setRows - 1)) swap(arr,emptyRow,emptyColumn,++emptyRow,emptyColumn); break;
      // left
			case 3: if(emptyColumn != 0) swap(arr,emptyRow,emptyColumn,emptyRow,--emptyColumn);
		}

  //create a table
	var table = document.createElement("table"),
	tbody = document.createElement("tbody");
	table.appendChild(tbody);
	table.style.width = startBoard.setSize + "px";
	table.style.height = startBoard.setSize + "px";
	for(i = 0; i < startBoard.setRows; ++i) {
    //added rows in the table
		var row = document.createElement("tr");
		for(j = 0; j < startBoard.setColumns; ++j) {
      //create cells in the table
			var cell = document.createElement("td");
				cell.id = i + " " + j;
        //bind function on click to a cell
				cell.onclick = cellClick;
        //recording element in cell
				cell.innerHTML = arr[i][j];
        //added row in table
				row.appendChild(cell);
		}
		tbody.appendChild(row);
	}
  //check if the element has a table
	if(box.childNodes.length == 1)
		box.removeChild(box.firstChild);
	  box.appendChild(table);
}
