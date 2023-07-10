
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
