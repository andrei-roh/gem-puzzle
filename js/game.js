var arr = [], box, emptyRow, emptyColumn;
var playerMoves = 0;

//keysound
function soundHandler(soundSource) {
	const keySound = document.createElement('audio');
	keySound.src = soundSource;
	keySound.play();
 }

var moves = document.getElementById('moves');
var victoryMessage = document.getElementById('victory');
var watchTime = document.getElementById('watch')
moves.innerHTML =`Moves: 0`;

let startBoard = {
	setRows: 4,
	setColumns: 4,
	setLimit: 6,
	setMultiplier: 4,
	numberOfCombinations: 1600,
}

var tinyBoard = document.getElementById('3x3');
tinyBoard.addEventListener ('click', () => {
	startBoard = {
		setRows: 3,
		setColumns: 3,
		setLimit: 4,
		setMultiplier: 3,
		numberOfCombinations: 900,
	};
	createNumbers();
});

var smallBoard = document.getElementById('4x4');
smallBoard.addEventListener ('click', () => {
	startBoard = {
		setRows: 4,
		setColumns: 4,
		setLimit: 6,
		setMultiplier: 4,
		numberOfCombinations: 1600,
	};
	createNumbers();
});

var middleBoard = document.getElementById('5x5');
middleBoard.addEventListener ('click', () => {
	startBoard = {
		setRows: 5,
		setColumns: 5,
		setLimit: 8,
		setMultiplier: 5,
		numberOfCombinations: 2000,
	};
	createNumbers();
});

var bigBoard = document.getElementById('6x6');
bigBoard.addEventListener ('click', () => {
	startBoard = {
		setRows: 6,
		setColumns: 6,
		setLimit: 10,
		setMultiplier: 6,
		numberOfCombinations: 3600,
	};
	createNumbers();
});

var biggestBoard = document.getElementById('7x7');
biggestBoard.addEventListener ('click', () => {
	startBoard = {
		setRows: 7,
		setColumns: 7,
		setLimit: 12,
		setMultiplier: 7,
		numberOfCombinations: 4900,
	};
	createNumbers();
});

var hugeBoard = document.getElementById('8x8');
hugeBoard.addEventListener ('click', () => {
	startBoard = {
		setRows: 8,
		setColumns: 8,
		setLimit: 14,
		setMultiplier: 8,
		numberOfCombinations: 6400,
	};
	createNumbers();
});

//change two elements on array
function swap(arr,i1,j1,i2,j2) {
	t = arr[i1][j1];
	arr[i1][j1] = arr[i2][j2];
	arr[i2][j2] = t;
}
window.onload = function() {
	startTimer()
	box = document.getElementById("box");
	createNumbers();
	document.getElementById("reset").onclick = () => {
		createNumbers();
		ClearСlock();
		startTimer();
	}
}

function cellClick(event) {
	soundHandler('./assets/sounds/tink.wav');
	playerMoves += 1;
	var event = event || window.event,
		el = event.srcElement || event.target,
    //get the number of the row and column at the intersection of which the cell is located.
		i = el.id.charAt(0),
		j = el.id.charAt(2);
    /*if empty cell is located in the same row or the same column with the cell that was clicked,
		then their contents are swapped*/
		 moves.innerHTML =`Moves: ${playerMoves}`;

	if((i == emptyRow && Math.abs(j - emptyColumn) == 1) || (j == emptyColumn && Math.abs(i - emptyRow) == 1)){
		document.getElementById(emptyRow + " " + emptyColumn).innerHTML = el.innerHTML;
		el.innerHTML = "";
    //remember a position of the empty cell
		emptyRow = i;
		emptyColumn = j;
		var checkVictory = true;
    //checked a winning combination
		for(i = 0; i < startBoard.setRows; ++i)
			for(j = 0; j < startBoard.setColumns; ++j)
				if(i + j != startBoard.setLimit && document.getElementById(i + " " + j).innerHTML != i * startBoard.setMultiplier + j + 1){
					checkVictory = false;
					break;
				}
				if(checkVictory) {
					victoryMessage.innerHTML = `Congratulations! You solved the puzzle in ${watchTime.value} and ${playerMoves} moves`
					PopUpShow();
					ClearСlock();
				}
	}
}

//added array with N elements
function createNumbers(){
	playerMoves = 0;
	for(rows = 0; rows < startBoard.setRows; ++rows){
		arr[rows] = []
		for(columns = 0; columns < startBoard.setRows; ++columns){
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

//POPUP
$(document).ready(function(){
		//Скрыть PopUp при загрузке страницы
		PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
		$("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
		$("#popup1").hide();
}
