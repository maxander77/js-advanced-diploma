import Character from "../Character";
import Swordsman from "../characters/Swordsman";
import { characterGenerator, generateTeam } from "../generators"; 
import Magician from "../characters/Magician";


describe('Character Class', function () {
  it('should throw an error, when creating a Character object', function () {
    expect(() => new Character()).toThrow('Constructor new Character() is unavailable')
  });
});

describe('Character Creation', function () {
  it('should create Bowman with correct properties at level 1', function () {
    const swordsman = new Swordsman(1);
    expect(swordsman.type).toEqual('swordsman');
    expect(swordsman.level).toEqual(1);
  });
});

describe('Character Generator', function () {
  it('should generate characters infinitely from the allowed types', function () {
    const allowedTypes = [Swordsman, Magician];
    const maxLevel = 3;
    const generator = characterGenerator(allowedTypes, maxLevel);
    
    const characters = [];
    for (let i = 0; i < 10; i++) {
      const character = generator.next().value;
      characters.push(character);
      expect(allowedTypes).toContain(character.constructor);
      expect(character.level).toBeLessThanOrEqual(maxLevel);
    }
  });
});

describe('Generate Team', function () {
  it('should generate a team with the specified character count', function () {
    const allowedTypes = [Swordsman, Magician];
    const maxLevel = 3;
    const characterCount = 5;
    const team = generateTeam(allowedTypes, maxLevel, characterCount);

    expect(team.characters).toHaveLength(characterCount);
    team.characters.forEach(character => {
      expect(allowedTypes).toContain(character.constructor);
      expect(character.level).toBeLessThanOrEqual(maxLevel);
    });
  });
});