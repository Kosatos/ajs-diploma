import Team from './Team';
import themes from './themes';
import GameState from './GameState';
export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    GameState.from({ player: 'user', currentLevel: 1 });
    this.gamePlay.drawUi(themes(GameState.currentLevel));
    this.currentTeam = new Team();
    this.gamePlay.redrawPositions(this.currentTeam.team);

    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
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
