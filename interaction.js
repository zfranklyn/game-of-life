// interaction

document.addEventListener('DOMContentLoaded', function() {
	const TABLE_X = 10, TABLE_Y = 10;
	let game = new Game(TABLE_X, TABLE_Y);
	document.body.appendChild(game.table.table);

	let step = document.createElement("BUTTON");
	document.body.appendChild(step);

	step.addEventListener("click", () => {
		game.update();
	});
});



