
const array = [
  [88, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [3, 'Hair Pin'],
  [5, 'Microphone'],
  [3, 'Half-Eaten Apple'],
  [7, 'Toothpaste']
];

// general sort
// array.sort()

// below code is the demostration for each element of the array
// it will be checked and sorted

array.sort((a, b) => {
    if(a[1] > b[1])
    {
        return 1
    }
    else
    {
        return -1
    }
})

console.log(array)
