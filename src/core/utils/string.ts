export function reverseString(str: string): string {
  const splittedStr = str.split('');
  const reversedSplittedStr = splittedStr.reverse();
  return reversedSplittedStr.join('');
}
