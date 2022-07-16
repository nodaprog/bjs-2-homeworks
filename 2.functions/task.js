// Задание 1
function getArrayParams(arr) 
{
  let min = arr[0], 
      max = arr[0], 
      sum = 0, 
      avg = 0;

  // Ваш код
  for (let i in arr)
  {
    if (i <= min) 
    {
      min = arr[i];
    }

    if (i > max) 
    {
      max = arr[i];
    }

    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) 
{
  let sum = 0;

  // Ваш код
  for (let i in arr)
  {
    sum += arr[i];
  } 
  return sum;
}

function makeWork(arrOfArr, func) 
{
  let max = 0;

  // Ваш кода
  // for ...
  for (let arr in arrOfArr)
  {
    if (func(arrOfArr[arr]) > max) 
    {
      max = func(arrOfArr[arr]);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) 
{
  // Ваш код
  let min = getArrayParams(arr).min;
  let max = getArrayParams(arr).max;

  let diss = Math.abs(min - max);

  return diss;
}
