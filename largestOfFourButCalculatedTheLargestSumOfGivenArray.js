function largestOfFour(arr) {
  
  let largestArraySum = 0;
  let largestArrayIndex;

  for(let x = 0; x < arr.length; x++)
  {
    let sum = 0
    for(let y = 0; y < arr[x].length; y++)
    {
      sum += arr[x][y]
    }
    
    //console.log(sum)

    if(largestArraySum < sum)
    {
      largestArraySum = sum
      largestArrayIndex = x
    }
    // return format console.log(arr[x])
  }
  return arr[largestArrayIndex];
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
