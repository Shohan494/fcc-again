function permuteHelper(characters, x) {
  //console.log("Recursive function called")
  //console.log("Value of x: " + x)
  // WHEN X === STRING LENGTH STRING WILL BE CREATED
  if (x === characters.length) {
    console.log("Permutation:")
    console.log(characters.join(''))
    return;
  }
  // loop starts from 0 because as x 0 was passed already
  for (let i = x; i < characters.length; i++) {
    //console.log("Loop Starts")
    //console.log("i = " + i)
    //console.log("Characters")
    //console.log(characters)
    console.log("Swaping " + characters[x] + " with " + characters[i])
    swap(characters, x, i)
    permuteHelper(characters, x + 1)
    console.log("Backtrack to restore original order")
    //console.log("value of x = " + x + " value of i = " + i)
    swap(characters, x, i) // Backtrack to restore original order
    //console.log("Loop Ends")
  }
}

function swap(arr, i, j) {
  console.log("Before Swap")
  console.log(arr)
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  console.log("After Swap")
  console.log(arr)
}

permuteHelper(['A', 'B', 'C'], 0)
