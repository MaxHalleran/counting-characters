function countLetters(input)
{
  tmpObj = {};

  for(let i = 0; i < input.length; i++)
  {
      if(tmpObj[input[i]] === undefined)
      {
        tmpObj[input[i]] = 1;
      }
      else
      {
        tmpObj[input[i]]++;
      }
  }
  return tmpObj;
}

console.log(countLetters("test"));