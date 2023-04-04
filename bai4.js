function isPalindrome(str) {
  if (typeof str !== "string") {
    return "It must be a string";
  }
  str = str.toLowerCase();
  let reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return true;
  }
  return false;
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("IO"));
console.log(isPalindrome(12321));
