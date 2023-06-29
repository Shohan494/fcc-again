function binaryAgent(str) {
  console.log(str.length)
  let smallString = "";
  let resultString = "";
  //console.log(str[169])
  for(let x = 0; x <= str.length; x++)
  {
    console.log(str[x])
    if(str[x] == " " || x == str.length)
    {
      console.log(smallString)
      let convertedBinaryToDecimal = 0
      let z = 0
      for(let y = smallString.length - 1; y >= 0; y--)
      {
        convertedBinaryToDecimal += ( Number(smallString[y]) * Math.pow(2, z) )
        z++
        
        //console.log(convertedBinaryToDecimal)
        //console.log(String.fromCharCode(convertedBinaryToDecimal));
      }
      //console.log(String.fromCharCode(convertedBinaryToDecimal));
      resultString += String.fromCharCode(convertedBinaryToDecimal)
      smallString = ""
    }
    else
    {
      smallString += str[x]
    }
  }
  //console.log(resultString)
  return resultString
}

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")
