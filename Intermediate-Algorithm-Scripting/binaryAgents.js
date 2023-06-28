function binaryAgent(str) {
  //console.log(str.length)
  let smallString = "";
  for(let x = 0; x < str.length; x++)
  {
    
    if(str[x] == " ")
    {
      //console.log(smallString)
      let convertedBinaryToDecimal = 0
      let z = 0
      for(let y = smallString.length - 1; y >= 0; y--)
      {
        convertedBinaryToDecimal += ( Number(smallString[y]) * Math.pow(2, z) )
        z++
        console.log(convertedBinaryToDecimal)
      }

      smallString = ""
    }
    else
    {
      smallString += str[x]
    }
  }
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
