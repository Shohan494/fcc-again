function swap(a, b, arr) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}


function insertionSort(array) {
  for(let x = 0; x < array.length; x++)
  {
    for(let y = x; y > 0; y--)
    {
      if(array[y] > array[y + 1])
      {
        swap(y+1, y, array)
      }
    }

    console.log(array);
  }
  return array;
}

insertionSort([5, 4, 33, 2, 8])
