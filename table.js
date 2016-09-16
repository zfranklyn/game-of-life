var Table = function(x, y){
	this.width = x;
	this.height = y;

	var HTMLtable = document.createElement('TABLE');
	var that = this;

	for (var row = 0; row < y; row++){
		var currentRow = HTMLtable.insertRow(row);

		for (var col = 0; col < x; col++){
			var currentCell = currentRow.insertCell(col);
			currentCell.x = col;
			currentCell.y = row;

			//toggle life on click
			currentCell.addEventListener('click', function(){
				if (this.className === 'alive') {
					this.className = 'dead';
				}
				else {
					this.className = 'alive';
				}

				console.log(that.getAliveNeighbors(this));
			});

		}
	}

	this.table = HTMLtable;
};

// method to get cell of THIS table
Table.prototype.getCell = function(x,y){
	var row = this.table.rows[y];

	return row && row.cells[x];
};

Table.prototype.forEach = function(func){
	for (var row = 0; row < this.height; row++){
		for (var col = 0; col < this.width; col++){
			func(this.getCell(col, row));
		}
	}
};

Table.prototype.getAliveNeighbors = function(cell){
	let count = 0;

	for (let deltax = -1; deltax < 2; deltax++) {
		for (let deltay = -1; deltay < 2; deltay++) {
			let neighbor = this.getCell(cell.x + deltax, cell.y + deltay);
			if (neighbor && neighbor !== cell &&
			    neighbor.className === 'alive') {
				count++;
			}
		}
	}

	return count;
};
