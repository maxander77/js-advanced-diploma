import Character from "../Character";

export default class Browman extends Character {
  constructor(level) {
    super(level, 'browman')
    this.attack = 25;
    this.defence = 25;
  }
}