স্থানীয় মান নির্ণয় 

function cl(data)
{
  console.log(data)
}

function convertToRoman(num) {

let numberToString = num.toString()
let z = 0
for(let x = numberToString.length - 1; x >= 0; x--)
{
  //cl(numberToString[x] + ", 10 to the power " + z )
  cl( numberToString[x] * Math.pow(10, z) )
  z++
}



}

convertToRoman(54756867458);
