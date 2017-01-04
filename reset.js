function reset() {
  columns = [];
  bg = {'r':0, 'g':0, 'b':200};
  var x = 40;
  var y = 455;

  for (var i = 0; i < 8; i++) {
    columns[i]= [];
    for (var j = 0; j < 6; j++) {
      var gamePiece = new GamePiece(x, y - (j * spacing), 0);
      ellipse (x, y - (j * spacing), 50, 50);
      columns[i].push(gamePiece);
    }
    x += spacing;
  }
}