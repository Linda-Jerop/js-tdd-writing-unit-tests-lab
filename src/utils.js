export function isPalindrome(word) {
  // Check if input is a string
  if (typeof word !== 'string') {
    throw new Error('Input must be a string');
  }
  
  // Return false for empty strings
  if (word === '') {
    return false;
  }
  
  // Check if the word contains only alphabetic characters
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error('Input must contain only alphabetic characters');
  }
  
  // Convert to lowercase and reverse the string
  const normalizedWord = word.toLowerCase();
  const reversedWord = normalizedWord.split('').reverse().join('');
  return normalizedWord === reversedWord;
}
