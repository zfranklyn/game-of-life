// grid logic

var Game = function(width, height){
	this.table = new Table(width ,height);
	this.initialize();
}


Game.prototype.update = function(){
	this.table.forEach(cell => {

	});
}

Game.prototype.reset = function(){

}

Game.prototype.initialize = function(startPosition){
	//TODO:
	// initialize ALIVE property for every cell
	this.table.forEach(cell => {
		cell.className = "dead";
	});

}

Game.prototype.getAliveNeighbors = function(cell){
	let count = 0;

	for (let deltax = -1; deltax < 2; deltax++) {
		for (let deltay = -1; deltax < 2; deltax++) {
			if (deltax != deltay) {
				let neighbor = this.table.getCell(cell.x + deltax, cell.y + deltay);
				if (neighbor && neighbor.className === "alive") {
					count++;
				}
			}
		}
	}

	return count;
}

