// interaction

document.addEventListener('DOMContentLoaded', function() {
	const TABLE_X = 20, TABLE_Y = 20;

  // how fast game is running
  let updateInterval = 100;

  let title = document.createElement("H1");
  title.innerHTML = "The Game of Life";
  document.body.appendChild(title);

	let game = new Game(TABLE_X, TABLE_Y);
	document.body.appendChild(game.table.table);

  let gameUpdate;

  // TOGGLE PLAY BUTTON
  let playToggle = document.createElement('BUTTON');
  playToggle.innerHTML = 'PLAY';
  playToggle.className = 'btn btn-success';
  document.body.appendChild(playToggle);
  playToggle.addEventListener('click', () => {
    // check if the game is running
    if (game.isRunning){ // if so, pause
      game.isRunning = false;
      playToggle.innerHTML = 'PLAY';
      //TODO
      clearTimeout(gameUpdate);
    } else { // run
      game.isRunning = true;
      playToggle.innerHTML = 'PAUSE';
      // RUN:
      gameUpdate = setInterval(() => {
        game.step();
      }, updateInterval);
    }
  });

  // STEP BUTTON
	let step = document.createElement('BUTTON');
  step.innerHTML = 'STEP';
  step.className = 'btn btn-info';
	document.body.appendChild(step);

	step.addEventListener('click', () => {
		game.step();
	});

  // STEP BUTTON
  let resetButton = document.createElement('BUTTON');
  resetButton.innerHTML = 'RESET';
  resetButton.className = 'btn btn-warning';
  document.body.appendChild(resetButton);

  resetButton.addEventListener('click', () => {
    playToggle.innerHTML = 'PLAY';
    clearTimeout(gameUpdate);
    game.reset();
  });


});
