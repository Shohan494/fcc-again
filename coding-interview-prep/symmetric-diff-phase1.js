function sym(args) {
for(var arg = 0; arg < arguments.length - 1; arg++)
{
    var arr = arguments[arg];
    var nextArr = arguments[arg + 1];
    var result = [];
    console.log(arr)
    console.log(nextArr)
    for(var argElementIndexArr = 0; argElementIndexArr < arr.length; argElementIndexArr++)
    {
      console.log(arr[argElementIndexArr])
      console.log("Compare element with next array elements")
      var statusFound = false
      for(var argElementIndexNextArr = 0; argElementIndexNextArr < nextArr.length; argElementIndexNextArr++)
      {
        //console.log(arr[argElementIndexArr])
        //console.log(nextArr[argElementIndexNextArr])
        console.log("Comparing " + arr[argElementIndexArr] + " with " + nextArr[argElementIndexNextArr])
        if(arr[argElementIndexArr] == nextArr[argElementIndexNextArr])
        {
          statusFound = true
          break
        }
      }
      if(!statusFound)
      {
        result.push(arr[argElementIndexArr])
      }
    }
}

console.log(result)
return result
}

sym([1, 2, 3], [5, 2, 1, 4])
