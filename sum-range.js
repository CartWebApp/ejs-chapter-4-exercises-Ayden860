const split = [];
function range(start, end, step = 1) {
  // Add code.
  const list = [];
  if(start > end)
  {
    for(let q = end; q <= start; q++)
    {
      list.unshift(q);
      split.unshift(q);
    }
    return list;
  }
  if(end > start)
  {
    for(let u = start; u <= end; u++)
    {
      list.push(u);
      split.push(u);
    }
    return list;
  }
  return 0;
}

function sum(numbers) {
  // Add code.
  // let lowest = Math.min(numbers);
  // console.log(lowest);
  // let highest = Math.max(numbers);
  // for(let p = lowest; p < highest; p++)
  // const list_1 = [];
  // numbers = list_1.push();
// console.log(split);

  let grand = 0;
  for(let p = 0; p < numbers.length; p++)
  {
    grand += numbers[p];
    // grand + numbers[p]; 
    // return console.log(numbers[p]);
  }
  return grand;

}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
