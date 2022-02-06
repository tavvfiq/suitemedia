import { reverseString } from '../string';

describe('test reverse string', () => {
  it('should return reversed string', () => {
    const str = 'hello world';
    const expected = 'dlrow olleh';
    const result = reverseString(str);
    expect(result).toEqual(expected);
  });
});
