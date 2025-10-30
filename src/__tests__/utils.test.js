import { isPalindrome } from '../utils.js';

describe('isPalindrome', () => {
  test('returns true for palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns false for non-palindromes', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('returns true for palindromes with mixed case', () => {
    expect(isPalindrome('Racecar')).toBe(true);
    expect(isPalindrome('MoM')).toBe(true);
  });

  test('returns false for empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('throws error for strings with non-alphabetic characters', () => {
    expect(() => isPalindrome('race car')).toThrow();
    expect(() => isPalindrome('race1car')).toThrow();
    expect(() => isPalindrome('race!car')).toThrow();
  });

  test('throws error for non-string inputs', () => {
    expect(() => isPalindrome(123)).toThrow();
    expect(() => isPalindrome(null)).toThrow();
    expect(() => isPalindrome(undefined)).toThrow();
    expect(() => isPalindrome(true)).toThrow();
  });
});
