  import GamePlay  from "./GamePlay"
  import themes from "./themes";

  export default class GameController {
    constructor(gamePlay, stateService) {
      this.gamePlay = gamePlay;
      this.stateService = stateService;
    }

    init() {
      // TODO: add event listeners to gamePlay events
      // TODO: load saved stated from stateService
      const selectedTheme = themes.prairie;
      this.gameplay.drawUi(selectedTheme);
    }

    onCellClick(index) {
      // TODO: react to click
    }

    onCellEnter(index) {
      // TODO: react to mouse enter
    }

    onCellLeave(index) {
      // TODO: react to mouse leave
    }
  }
