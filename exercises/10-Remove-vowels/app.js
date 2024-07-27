// Your code goes here
const rapid = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let lowerStr = str.toLowerCase();
    let result = '';
    for (let char of lowerStr) {
      if (!vowels.includes(char)) {
        result += char.toUpperCase();
      }
    }
    return result;
  }

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
