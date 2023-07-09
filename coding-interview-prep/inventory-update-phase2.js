function updateInventory(arr1, arr2) {
    let result = []
    for(let x = 0; x < arr1.length; x++)
    {
        let statusFound = false
        for(let y = 0; y < arr2.length; y++)
        {            
            if(arr1[x][1] == arr2[y][1])
            {
                console.log("Match found")
                arr1[x][0] = arr1[x][0] + arr2[y][0]
                result.push(arr1[x])
                arr2.splice(y, 1)
                statusFound = true
                //break
            }   
        }

        if(statusFound == false)
        {
            console.log("Totally No Match found")
            result.push(arr1[x])
        } 
    }

arr2.forEach((element) => {
    result.push(element);
});


    //console.log(arr1[0][0])
    //console.log(arr1.length)
    
    console.log(result)
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]

];

updateInventory(curInv, newInv);
