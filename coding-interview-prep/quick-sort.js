function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function partition(arr, l, h) {
  let pivot = arr[l];
  console.log(arr)
  console.log("pivot = " + pivot)
  let i = l;
  let j = h;

  do {
    do {
      i++;
      console.log("i is = " + i)
    } while (arr[i] <= pivot);
    do {
      j--;
      console.log("j is = " + j)
    } while (arr[j] > pivot);

    if (i < j) {
      console.log("swapped " + arr[i] + " with " + arr[j])
      swap(arr, i, j);
      console.log(arr)
    }
  } while (i < j);
  swap(arr, l, j); // putting pivot value to j
  console.log("Main swap : " + arr[l] + " with " + arr[j])
  console.log("=============================================")
  console.log(arr)
  console.log("=============================================")
  return j;
}

function quickSort(arr, l, h) {
  let j;
  if (l < h) { // means sorted
    j = partition(arr, l, h); // partiotion, means pivot found it's position

    quickSort(arr, l, j); // first half
    quickSort(arr, j + 1, h); // second half
  }
  //console.log(arr);
  return arr;
}

let arr = [11, 13, 7, 12, 16, 9, 24, 5];
quickSort(arr, 0, arr.length);
//console.log("Sorted array:", arr);


