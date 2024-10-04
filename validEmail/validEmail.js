function validateEmail(email) {
  let n = email.length;

 
  if (n === 0 || n > 256) return false;

  let atCount = 0; 
  let atPosition = -1; 
  let hasDotAfterAt = false; 
  let dotPosition = -1; 

  for (let i = 0; i < n; i++) {
    let character = email[i];

  
    if (character === '@') {
      atCount++;
      if (atCount > 1) return false; 
      atPosition = i; 
    }

    if (atPosition !== -1 && character === '.') {
      hasDotAfterAt = true;
      dotPosition = i; 
    }
  }

  // Final validations
  if (
    atCount !== 1 || 
    atPosition === 0 || 
    atPosition === n - 1 || 
    !hasDotAfterAt || 
    dotPosition === n - 1 || 
    dotPosition - atPosition < 2 || // Ensure there is at least one character between @ and '.'
    n - dotPosition <= 2 // Ensure at least 2 characters after the last '.'
  ) {
    return false;
  }

  return true;
}

console.log(validateEmail("john.doe@gmail.com")); // true
console.log(validateEmail("john@doe@gmail.com")); // false
console.log(validateEmail("john@gmail.c")); // false 
console.log(validateEmail("john@.com")); // false
console.log(validateEmail("john@gmail.co")); // true
console.log(validateEmail("john..doe@gmail.com")); // true