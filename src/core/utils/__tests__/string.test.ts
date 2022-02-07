import { reverseString } from '../string';

describe('test string utils', () => {
  it('should return reversed string', () => {
    const str = 'hello world';
    const expected = 'dlrow olleh';
    const result = reverseString(str);
    expect(result).toEqual(expected);
  });
});
