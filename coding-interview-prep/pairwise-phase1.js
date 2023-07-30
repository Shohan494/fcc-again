function pairwise(arr, arg, value) {
  if(!value)
  {
    value = 0;
  }
  let sumOfIndex = 0 + value;
  console.log("sumOfIndex = " + sumOfIndex)
  for(let x = 0; x < arr.length; x++)
  {
    for(let y = x + 1; y < arr.length; y++)
    {
      console.log("checking " + arr[x] + " with " + arr[y])
      console.log(arr[x] + arr[y])
      if(arr[x] + arr[y] == arg)
      {
        console.log("index " + x + " and " + y)
        sumOfIndex += x + y
        console.log(arr)
        arr.splice(x, 1);
        console.log(arr)
        arr.splice(y, 1);
        console.log(arr)
        
        
      }
    }   
  }
  console.log(sumOfIndex)
}

pairwise([1,4,2,3,0,5], 7);
