import { calcTileType } from "../utils";

describe('calcTileType function', () => {
  it('should return "top-left"', () => {
    const result = calcTileType(0, 8);
    expect(result).toBe('top-left');
  });

  it('should return "top"', () => {
    const result = calcTileType(1, 8);
    expect(result).toBe('top');
  });

  it('should return "top-left"', () => {
    const result = calcTileType(0, 8);
    expect(result).toBe('top-left');
  });

  it('should return "bottom-right"', () => {
    const result = calcTileType(63, 8);
    expect(result).toBe('bottom-right');
  });

  it('should return "left"', () => {
    const result = calcTileType(7, 7);
    expect(result).toBe('left');
  });

  it('should return "center"', () => {
    const result = calcTileType(29, 8);
    expect(result).toBe('center');
  });
});