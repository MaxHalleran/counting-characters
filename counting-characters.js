function countLetters(input)
{
  tmpObj = {};

  for(let i = 0; i < input.length; i++)
  { 
      tmpObj[input[i]] === undefined ? tmpObj[input[i]] = 1 :  tmpObj[input[i]]++;
  }
  return tmpObj;
}

console.log(countLetters("supercalafragilisticespialidosious123554"));