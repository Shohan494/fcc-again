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


////////// part 2 ///////////////////

function findLongestWordLength(str) {

  let currentWordLength = 0;

  for(let x = 0; x < str.length; x++)
  {
    if(str[x] != " ")
    {
      currentWordLength++
    }
    else
    {
      console.log("last word length : " + currentWordLength)
      currentWordLength = 0;
    }
  }

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// breaking down the problem
// first separating the text with spaces and counting each word length
// when loop faced space the length set to zero to determine the next word length

// now we have to compare last word length with current word length and store the max value

////////// part 3 ///////////////////


function findLongestWordLength(str) {

  let currentWordLength = 0;
  let longestWordLength = 0;

  for(let x = 0; x < str.length; x++)
  {
    if(str[x] == " ")
    {
      console.log("last word length : " + currentWordLength)

      if(currentWordLength > longestWordLength)
      {
        longestWordLength = currentWordLength;
        console.log("longest word length : " + longestWordLength)
      }
      
      currentWordLength = 0;
    }
    else if(x == str.length - 1)
    {
      if(currentWordLength > longestWordLength)
      {
        longestWordLength = currentWordLength;
        console.log("longest word length : " + longestWordLength)
      }      
    }
    else
    {
      currentWordLength++
      //console.log(str[x]);
    }
  }
  return longestWordLength;
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");

// breaking down the problem
// first separating the text with spaces and counting each word length
// when loop faced space the length set to zero to determine the next word length

// now we have to compare last word length with current word length and store the max value
