class View {
  constructor(game, $el) {
    console.log($el);
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("ul").on("click", e =>{
      const $square = $(e.target);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const board = this.game.board;
    if (!board.isEmptyPos(pos)) {
      alert("Invalid Move!");
    }
    let mark = this.game.currentPlayer;
    this.game.playMove(pos);
    if (mark === 'x') {
      $square.addClass("x-clicked");
    } else {
      $square.addClass("o-clicked");
    }
    $square.append(mark);
    if (board.isOver()) {
      const winner = board.winner();
      if (winner) {
        alert(`${winner} wins!`);
      } else {
        alert("Cat's Game!");
      }
    }
  }

  setupBoard() {
    const $ul = $("<ul></ul>");
    $ul.addClass("board");
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++){
        const $li = $("<li></li>");
        $li.addClass("space");
        $li.data("pos", [x, y]);
        $ul.append($li);
      }
    }
  this.$el.append($ul);
  }
}



module.exports = View;
