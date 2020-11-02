var arr = [], box, ei,ej;
//change two elements on array
function swap(arr,i1,j1,i2,j2) {
	t = arr[i1][j1];
	arr[i1][j1] = arr[i2][j2];
	arr[i2][j2] = t;
}
window.onload = function() {
	box = document.getElementById("box");
	newGame();
	document.getElementById("reset").onclick = newGame;
}
function cellClick(event) {
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
	if((i == ei && Math.abs(j - ej) == 1) || (j == ej && Math.abs(i - ei) == 1)){
		document.getElementById(ei + " " + ej).innerHTML = el.innerHTML;
		el.innerHTML = "";
    //Запоминаем положение пустой ячейки
		ei = i;
		ej = j;
		var q = true;
    //Проверяем не в выигрышной ли комбинации находятся ячейки.
		for(i = 0; i < 4; ++i)
			for(j = 0; j < 4; ++j)
				if(i + j != 6 && document.getElementById(i + " " + j).innerHTML != i * 4 + j + 1){
					q = false;
					break;
				}
				if(q) alert("Victory!");
			}
}
//added array with 15 elements
function newGame(){
	for(i = 0; i < 4; ++i){
		arr[i] = []
		for(j = 0; j < 4; ++j){
			if(i + j != 6)
				arr[i][j] = i * 4 + j + 1;
			else
				arr[i][j] = "";
		}
	}

//mix created elements on array
	ei = 3;
	ej = 3;
	for(i = 0; i < 1600; ++i)
		switch(Math.round(3 * Math.random())){
      // up
			case 0: if(ei != 0) swap(arr,ei,ej,--ei,ej); break;
      // right
			case 1: if(ej != 3) swap(arr,ei,ej,ei, ++ej); break;
      // down
			case 2: if(ei != 3) swap(arr,ei,ej,++ei,ej); break;
      // left
			case 3: if(ej != 0) swap(arr,ei,ej,ei,--ej);
		}
  //create a table
	var table = document.createElement("table"),
	tbody = document.createElement("tbody");
	table.appendChild(tbody);
	for(i = 0; i < 4; ++i){
    //added rows in the table
		var row = document.createElement("tr");
		for(j = 0; j < 4; ++j){
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
