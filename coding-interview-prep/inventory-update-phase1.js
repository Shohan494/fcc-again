function updateInventory(arr1, arr2) {
    for(let x = 0; x < arr1.length; x++)
    {
        //console.log(arr1[x][1])
        
        let statusFound = false
        for(let y = 0; y < arr2.length; y++)
        {            
            //console.log(arr2[y][1])

            if(arr1[x][1] == arr2[y][1])
            {
                console.log("Match found")
                arr1[x][0] = arr1[x][0] + arr2[y][0]
                console.log(arr1[x][0])
                statusFound = true
                break
            }
            else
            {
                if(arr2[y][1])
            }
        }

        if(statusFound = false)
        {
            console.log()
            //arr1.push([ arr2[y][0], arr2[y][1] ])
        }  
        
        
    }

    //console.log(arr1[0][0])
    //console.log(arr1.length)
    
    console.log(arr1)
    return arr1;
}

// Example inventory lists
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
