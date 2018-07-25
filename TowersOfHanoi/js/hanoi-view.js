class HanoiView {
  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    this.setUpTowers();
  }
  
  setUpTowers() {
    const $tower1 = $("<ul></ul>");
    const $tower2 = $("<ul></ul>");
    const $tower3 = $("<ul></ul>");
    
    const $disc1 = $("<li></li>");
    $disc1.addClass("disc1");
    $tower1.append($disc1);
    
    const $disc2 = $("<li></li>");
    $disc2.addClass("disc2");
    $tower1.append($disc2);
    
    const $disc3 = $("<li></li>");
    $disc3.addClass("disc3");
    $tower1.append($disc3);
    
    this.rootEl.append($tower1);
    this.rootEl.append($tower2);
    this.rootEl.append($tower3);
  }
  
  
}

module.exports = HanoiView;