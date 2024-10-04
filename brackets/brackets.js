function isValidBracketSequence(input) {
    
  const arr = [];
  // Map of opening and closing brackets
  const brackets = {
      '(': ')',
      '[': ']',
      '{': '}',
      ')': '(',
      ']': '[',
      '}': '{'
  };

  // Loop through each character in the input string
  for (let i = 0; i < input.length; i++) {
      const char = input[i];

      
      if (char === '(' || char === '[' || char === '{') {
          arr.push(char);
      }
     
      else if (char === ')' || char === ']' || char === '}') {
          if (arr.length === 0 || arr.pop() !== brackets[char]) {
              return false; 
          }
      }
  }

  // Return true if the arr is empty 
  return arr.length === 0;
}

// Test cases
console.log(isValidBracketSequence("()[1]")); // Returns true
console.log(isValidBracketSequence("([)])")); // Returns false
console.log(isValidBracketSequence("(")); // Returns false
console.log(isValidBracketSequence("[(1)]")); // Returns true
console.log(isValidBracketSequence("([JJ])")); // Returns true
console.log(isValidBracketSequence("([JJ")); // Returns false
