function countLetters(input)
{
  tmpObj = {};

  for(let i = 0; i < input.length; i++)
  { 
      if(tmpObj[input[i]] === undefined) 
      {
        tmpObj[input[i]] = {count: 1, indices: [i]}
      }
      else
      {
         tmpObj[input[i]].count++;
         tmpObj[input[i]].indices.push(i);
      }
  }   
  return tmpObj;
}

console.log(countLetters("supercalafragilisticespialidosious123554"));