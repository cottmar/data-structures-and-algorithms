// Big O:
// time: O(n)
// space: O

const repeatedWord = 'A dog, a best friend.';

const findRepeated = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('ERROR: key should be a string');
  }
  if (str === '') {
    throw new TypeError('ERROR: string cannot be empty');
  }
  str = str.toLowerCase();
  // convert string into array using regex
  const array = str.match(/\w+/g)
  const map = {};
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 1;
    } else if (map[array[i]]) {
        return array[i];
      }
    } 
    return null;
  } 

  console.log(findRepeated(repeatedWord));
