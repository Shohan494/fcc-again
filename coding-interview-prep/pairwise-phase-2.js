function pairwise(arr, arg,) {
  let sumOfIndex = 0;
  let diff = 0
  console.log("sumOfIndex = " + sumOfIndex)
  for(let x = 0; x < arr.length; x++)
  {
    for(let y = x + 1; y < arr.length; y++)
    {
      console.log("checking " + arr[x] + " with " + arr[y])
      if(arr[x] + arr[y] == arg)
      {
        console.log("index " + x + " and " + y)
        arr.splice(x - diff, 1);

        arr.splice(y - diff, 1);
        sumOfIndex += x + y + diff

        diff++
        diff++

        console.log(arr)
        console.log("sumOfIndex = " + sumOfIndex)
        x--
      }
      
    }   
  }
  console.log(sumOfIndex)
}

pairwise([1,4,2,3,0,5], 7);
