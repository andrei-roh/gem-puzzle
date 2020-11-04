var arr = [], box, emptyRow, emptyColumn;
var playerMoves = 0;

//keysound
function soundHandler(soundSource) {
	const keySound = document.createElement('audio');
	keySound.src = soundSource;
	keySound.play();
 }

var moves = document.getElementById('moves');
moves.innerHTML =`Moves: 0`;

let startBoard = {
	setRows: 4,
	setColumns: 4,
	setLimit: 6,
	setMultiplier: 4,
}

var tinyBoard = document.getElementById('3x3');
tinyBoard.addEventListener ('click', () => {
	startBoard = {
		setRows: 3,
		setColumns: 3,
		setLimit: 4,
		setMultiplier: 3,
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
    /*
     * получаем номер строки и столбца, на пересечении которых
     * расположена ячейка. Мы записали их ранее в её id ячейки.
     */
    //get the number of the row and column at the intersection of which the cell is located.
		i = el.id.charAt(0),
		j = el.id.charAt(2);
    /*
     * Если пустая ячейка расположена в одном стобце или строке
     * с ячейкой, по которой кликнули, и расстояние между
     * этими ячейками 1, то меняем их содержимое местами
     */
		 moves.innerHTML =`Moves: ${playerMoves}`;

	if((i == emptyRow && Math.abs(j - emptyColumn) == 1) || (j == emptyColumn && Math.abs(i - emptyRow) == 1)){
		document.getElementById(emptyRow + " " + emptyColumn).innerHTML = el.innerHTML;
		el.innerHTML = "";
    //Запоминаем положение пустой ячейки
		emptyRow = i;
		emptyColumn = j;
		var checkVictory = true;
    //Проверяем не в выигрышной ли комбинации находятся ячейки.
		for(i = 0; i < startBoard.setRows; ++i)
			for(j = 0; j < startBoard.setColumns; ++j)
				if(i + j != startBoard.setLimits && document.getElementById(i + " " + j).innerHTML != i * startBoard.setMultiplier + j + 1){
					checkVictory = false;
					break;
				}
				if(checkVictory) alert("Victory!");
			}
}

//added array with 15 elements
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
	for(i = 0; i < 1600; ++i)
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
