import { generateRandomLat, generateRandomLong } from '../generator';

describe('test generator utils', () => {
  it('should return longitude between 110 to 115', () => {
    const lng = generateRandomLong();
    expect(parseFloat(lng)).toBeGreaterThanOrEqual(110);
    expect(parseFloat(lng)).toBeLessThanOrEqual(115);
  });
  it('should return latitude between -9 to +9', () => {
    const lat = generateRandomLat();
    expect(parseFloat(lat)).toBeGreaterThanOrEqual(-9);
    expect(parseFloat(lat)).toBeLessThanOrEqual(9);
  });
});
