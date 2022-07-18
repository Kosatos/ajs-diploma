import { generateTeam } from './generators';
import PositionedCharacter from './PositionedCharacter';
import Bowman from './characters/Bowman';
import Swordsman from './characters/Swordsman';
import Magician from './characters/Magician';
import Daemon from './characters/Daemon';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';
import GameState from './GameState';

export default class Team {
  constructor() {
    this.team = [];
    this.indexArray = [];

    GameState.currentLevel = 1;

    const userTeam = generateTeam([Bowman, Swordsman], 1, 2);
    userTeam.forEach((el) =>
      this.team.push(new PositionedCharacter(el, this.getIndex(true)))
    );

    const computerTeam = generateTeam([Daemon, Undead, Vampire], 1, 2);
    computerTeam.forEach((el) =>
      this.team.push(new PositionedCharacter(el, this.getIndex()))
    );
  }

  getIndex(user) {
    let index;
    if (user) {
      do {
        index = Math.round(Math.random()) + Math.round(Math.random() * 8) * 8;
      } while (this.indexArray.includes(index) || index > 63);
      this.indexArray.push(index);
      return index;
    }
    do {
      index = 6 + Math.round(Math.random()) + Math.round(Math.random() * 8) * 8;
    } while (this.indexArray.includes(index) || index > 63);
    this.indexArray.push(index);
    return index;
  }
}
