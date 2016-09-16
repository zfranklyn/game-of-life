// grid logic

var Game = function(width, height) {
	this.table = new Table(width, height);
	this.reset();
	this.isRunning = false;
};


Game.prototype.step = function() {

	let newBoard = new Array(this.table.height);
	for (let i = 0; i < this.table.height; i++) {
		newBoard[i] = new Array(this.table.width);
	}

	this.table.forEach(cell => {
		let numNeighbors = this.table.getAliveNeighbors(cell);

		if (numNeighbors < 2) {
			//dies
			newBoard[cell.y][cell.x] = 'dead';
		}
		else if (numNeighbors > 3) {
			//dies
			newBoard[cell.y][cell.x] = 'dead';
		}
		else if (numNeighbors === 3) {
			//dead, exactly 3 neighbors => alive
			newBoard[cell.y][cell.x] = 'alive';
		}
		else {
			newBoard[cell.y][cell.x] = cell.className;
		}
	});

	for (let row = 0; row < this.table.height; row++) {
		for (let col = 0; col < this.table.width; col++) {
			this.table.getCell(col, row).className = newBoard[row][col];
		}
	}
};

Game.prototype.reset = function() {
	this.table.forEach(cell => {
		cell.className = (Math.random() < 0.2) ? 'alive':'dead';
	});
	this.isRunning = false;
};
