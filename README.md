# fcc-again

- recursion thought process should be written and analyzed
- regex was good but didn't try to memorize rules and checked a few solutions
- Basic Data Structures section I did long ago, so did again for warm up with my second account

- longest word in a string caused some time consumption, separating by space I had to count the word length, but as the code was depended on space, the last word length counting was causing issue, the missing piece, so while counting the characters and increasing value, additonal check was added inside the "if" block "if the string position is the last one or not"
- only the if and  inner if block
```
if(str[x] != " ")
{
  if(x == str.length - 1)
  {
    currentWordLength++
    if(currentWordLength > longestWordLength)
    {
      longestWordLength = currentWordLength;
      console.log("longest word length : " + longestWordLength)
    }

    currentWordLength = 0;  
  }
  else
  {
    currentWordLength++
  }
}
```
- fcc nearest solution
```
function findLongestWordLength(str) {
let longestLength = 0;
let currentLength = 0;

for (let i = 0; i < str.length; i++) {
  console.log("Current Character : " + str[i])
  if (str[i] === " ") {
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
    currentLength = 0;
  } else {
    currentLength++;
  }
}

// for last word section, this is the difference from my code
// for this section I had to put an additonal if block inside main if block, check above section code

if (currentLength > longestLength) {
  longestLength = currentLength;
}

return longestLength;
}
```
- in Return Largest Numbers in Arrays problem, when we had to find the max value inside an array, my basic idea was to comparing with 0 (which was set the initial max value) first with every array elements, but this worked for positive values, when negative values were there, had to set the max value array[x][0] and then we needed to compare
