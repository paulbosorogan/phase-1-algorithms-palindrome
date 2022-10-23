function isPalindrome(word) {
  // Write your algorithm here
  const splitWord = word.split('')
  const reverseWord = splitWord.reverse()
  const joinReverse = reverseWord.join('')
  if(word === joinReverse){
    return true
  }else{
    return false
  }
}


/* 
  Add your pseudocode here
  if array of char of strong [ w o r d] === array backwards [ d r o w]
  return true 
  else false
*/

/*
  Add written explanation of your solution here
  if the fist letter equals the last and then there's on in the middle that has no
  other match nor option => palindrome

  OR

  if the word displayed in ascendent order equals the word displayed backwards
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
