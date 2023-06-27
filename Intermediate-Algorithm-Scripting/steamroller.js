function steamrollArray(array)
{
  let resultArray = []
  for(let x = 0; x < array.length; x++)
  {
    if(Array.isArray(array[x]))
    // I used "array[x].length >= 1" first
     {
      console.log(array[x]);
      //console.log(...steamrollArray(array[x]))
      resultArray.push(...steamrollArray(array[x]));
      console.log(resultArray)
      // this line killed me
      // thinking flow was right later on
      // loop through array and check if every element is array or not
        // if not, then push to result array
      // if array then pass the inner array everytime, and at last "the last element" will be pushed to result array because of recursion function call
    }
    else
    {
      //console.log(array[x] + " Pushed")
      resultArray.push(array[x])
    }
  }
  console.log(resultArray)
  return resultArray;
  
}
steamrollArray([[["a"]], [["b"]]])
