function findLongestWordLength(str) {
  //return str.length;
  let longestWordLength = 0;
  let currentWordLength = 0
  for(let x = 0; x < str.length; x++)
  {
    if(str[x] != " ")
    {
      currentWordLength++
      longestWordLength = currentWordLength
    }
    else
    {
      if()
      currentWordLength = 0;
    }
  }
  console.log(longestWordLength);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
