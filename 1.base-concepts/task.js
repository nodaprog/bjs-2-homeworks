'use strict';

function solveEquation(a, b, c) 
{
  let arr = [];
  // код для задачи №1 писать здесь
  let D = Math.pow(b, 2) - 4 * a * c; // Вычисляем дискриминант

  if (D < 0) //Если дискриминант меньше нуля, то массив значений пуст
  {
    arr;
  }

  if (D === 0) //Если дискриминант равен 0, то значение в массиве одно
  {
    let x = (-b) / (2 * a);
    arr.push(x);
  }

  if (D > 0) //Если дискриминант больше 0, то значений в массиве 2
  {
    let x1 = ((-b) + Math.sqrt(D)) / (2 * a);
    let x2 = ((-b) - Math.sqrt(D)) / (2 * a);
    arr.push(x1, x2);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) 
{
  let totalAmount = 0;
  let body = 0;
  let months = 0;
  let percentPerMonth = 0; 
  let monthPayment = 0; 

  // код для задачи №2 писать здесь
  if(isNaN(Number(percent))) //Проверка на корректность введенной процентной ставки
  {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if(isNaN(Number(contribution))) //Проверка на корректность значения первоначального взноса
  {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (isNaN(Number(amount))) //Проверка параметра общей стоимости кредита
  {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  body = amount - contribution; //Рассчет тела кредита
  months = (date.getMonth() - new Date().getMonth()) + 12 * (date.getFullYear() - new Date().getFullYear()); //Количество месяцев
  percentPerMonth = ((1 / 12) * percent) / 100; // Процент в месяц
  monthPayment = body * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** months) - 1))); //Ежемесячный платеж

  totalAmount = Number((monthPayment * months).toFixed(2)); // Сумма, которую потребуется выплатить

  return totalAmount;
}
