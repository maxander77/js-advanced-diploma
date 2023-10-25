  import GamePlay  from "./GamePlay"
  import themes from "./themes";
  import Bowman from "./characters/Bowman";
  import Daemon from "./characters/Daemon";
  import Magician from "./characters/Magician";
  import Swordsman from "./characters/Swordsman";
  import Undead from "./characters/Undead";
  import Vampire from "./characters/Vampire";
  import { generateTeam, characterGenerator } from './generators';
  import PositionedCharacter from "./PositionedCharacter";
  

  export default class GameController {
    constructor(gamePlay, stateService) {
      this.gamePlay = gamePlay;
      this.stateService = stateService;
    }

    init() {
      // TODO: add event listeners to gamePlay events
      // TODO: load saved stated from stateService
      const selectedTheme = themes.prairie;
      this.gamePlay.drawUi(selectedTheme);

      const playerPositions = [0, 1, 8, 9, 16, 17, 24, 25];
      const enemyPositions = [54, 55, 62, 63, 70, 71, 78, 79];

      const playerTeam = generateTeam([Bowman, Swordsman, Magician], 1, 2);
      const playerCharacters = [...characterGenerator(playerTeam, playerPositions)];
  
      const enemyTeam = generateTeam([Daemon, Undead, Vampire], 1, 2);
      const enemyCharacters = [...characterGenerator(enemyTeam, enemyPositions)];
  
      const positionedPlayerCharacters = playerCharacters.map((character, index) =>
        new PositionedCharacter(character, playerPositions[index])
      );
  
      const positionedEnemyCharacters = enemyCharacters.map((character, index) =>
        new PositionedCharacter(character, enemyPositions[index])
      );
  
      this.gamePlay.redrawPositions(positionedPlayerCharacters.concat(positionedEnemyCharacters));
      
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
