function steamrollArray(array) {
  let resultArray = [];
  
  for (let x = 0; x < array.length; x++) {
    if (Array.isArray(array[x])) {
      console.log("Array is : " + array[x])
      
      // Recursively flatten the nested array
      const flattenedSubarray = steamrollArray(array[x]);
      //THIS LINE ACTUALLY PUSHES THE LAST ELEMENT OF NESTED ARRAY 
      console.log(`Flattened subarray: ${flattenedSubarray}`);
      
      
      // Spread the flattened subarray into the resultArray
      resultArray.push(...flattenedSubarray);
    } else {
      console.log(`Pusing element: ${array[x]}`);
      
      // Add non-array element to the resultArray
      resultArray.push(array[x]);
    }
  }
  
  console.log(`Final resultArray: ${resultArray}`);
  
  return resultArray;
}

steamrollArray([1, [], [3, [[4]]]]);

// ABOVE SOLUTION IS WHEN I UNDERSTOOD BETTER

// BELOW SOLUTION IS WHEN I TRIED TO UNDERSTAD BETTER

function steamrollArray(array)
{
  let resultArray = []
  for(let x = 0; x < array.length; x++)
  {
    console.log("Loop running " + x)
    if(Array.isArray(array[x]))
    // I used "array[x].length >= 1" first
     {
      console.log("Is Array");
      console.log("Array Element " + array[x]);
      console.log("Spread: ");
      console.log(...steamrollArray(array[x]))
      resultArray.push(...steamrollArray(array[x]));
      console.log("Result " + resultArray)
      // this line killed me
      // thinking flow was right later on after a few first trial
      // loop through array and check if every element is array or not
        // if not, then push to result array
      // if array then pass the inner array everytime, and at last "the last element" will be pushed to result array because of recursion function call
    }
    else
    {
      console.log(array[x] + " Pushed")
      resultArray.push(array[x])
    }
  }
  console.log(resultArray)
  return resultArray;
  
}
steamrollArray([1, [], [3, [[4]]]])
