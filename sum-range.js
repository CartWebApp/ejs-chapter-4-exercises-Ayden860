function range(start, end, step = 1) {
  // Add code.
  const list = [end.length];
  // let k = start;
  // do
  // {
  //   k + 1;
  // }
  // while (start < end)
  let k = 0;
  for(let u = 0; u < list.length; u++)
  {
    k + 1;
    k = list[u];
  }
  return list;
  if(start > end)
  {

  }
  if(end > start)
  {
    let i = end;
    for(let y = i; y < start; y--)
    {
      list = y - 1;
    }
    return list;
  }
  if(step > start && end)
  {

  }
}

function sum(numbers) {
  // Add code.
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
