function cl(data)
{
  console.log(data)
}

function convertToRoman(num) {

if(num <= 5)
{
  if(5 - num == 0)
  {
    cl("V")
  }
  else if(5 - num == 1)
  {
    cl("IV") // BASICALLY "V - I == 4" // ADDED I BEFORE ROMAN STRING V
  }
  else if (5 - num <= 3 )
  {
    if(5 - num == 2)
    {
      cl("III")
    }
    else if(5 - num == 3)
    {
      cl("II")
    }
    else{
      cl("I")
    }
  }
}

//console.log(romanString)

}

convertToRoman();
