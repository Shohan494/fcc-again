function largestOfFour(arr) {
  
  
  let largestNumberArrayCollection = [];

  for(let x = 0; x < arr.length; x++)
  {
    let largestNumberInArray = 0;
    for(let y = 0; y < arr[x].length; y++)
    {
      console.log(arr[x][y]);
      
      if(largestNumberInArray < arr[x][y])
      {
        console.log(arr[x][y] + " is greater than " + largestNumberInArray);
        largestNumberInArray = arr[x][y];
      }
    }

    largestNumberArrayCollection.push(largestNumberInArray); 
    
  }
  return largestNumberArrayCollection;
  //console.log(largestNumberArrayCollection);
}

Failed: largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
