'use strict';

function compareArrays(arr1, arr2) 
{
  let result;

  // Ваш код
  // Если длины массивов разные возвращаем  false
  if (arr1.length !== arr2.length) 
  {
    result = false;
  } 
  // Иначе, если елементы массивов имеют одинаковые значения и индексы этих значений, то возвращаем true
  // Для сравнения массивов используется функция высшего порядка every
  else 
  {
    result = arr1.every(function(item, index)
    {
      return arr1[index] === arr2[index] && arr1[item] === arr2[item];
    });
  }
  return result; // boolean
}

function advancedFilter(arr) 
{
  let resultArr = arr.filter(a => a > 0).filter(a => a % 3 === 0).map(a => a * 10);

  // Ваш код

  return resultArr; // array
}
