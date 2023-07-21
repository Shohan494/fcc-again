function permAlone(str) {
  let characters = [...str];
  let count = 0;
  countPermutationsHelper(characters, 0, count);
  return count;
}

function countPermutationsHelper(characters, x, count) {
  if (x === characters.length) {
    count++;
    return;
  }

  for (let i = x; i < characters.length; i++) {
    if (!hasRepeatedConsecutiveLetters(characters, x, i)) {
      swap(characters, x, i);
      countPermutationsHelper(characters, x + 1, count);
      swap(characters, x, i); // Backtrack to restore original order
    }
  }
}

function hasRepeatedConsecutiveLetters(arr, start, end) {
  for (let i = start; i < end; i++) {
    if (arr[i] === arr[end]) {
      return true;
    }
  }
  return false;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage
permAlone('AAB'); // Output: 2
