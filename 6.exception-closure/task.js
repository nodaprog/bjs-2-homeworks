'use strict';

function parseCount(value)
{
    if (Number.isNaN(Number.parseInt(value)))
    {
        throw new Error('Невалидное значение');
    }

    return Number.parseInt(value);
}

function validateCount(value)
{
    try
    {
        return parseCount(value);
    }
    catch (err)
    {
        return err;
    }
}

class Triangle 
{
    constructor(a, b, c)
    {
        if (a + b < c || a + c < b || b + c < a) 
        {
            throw new Error('Треугольник с такими сторонами не существует');
        }

        this.a = a,
        this.b = b,
        this.c = c
    }

    getPerimeter()
    {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.getPerimeter() * 0.5;
        let s = parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
        
        return s;
    }
}

function getTriangle(a, b, c)
{
    try
    {
        return new Triangle(a, b, c);
    }
    catch(err)
    {
        return {
            getPerimeter() 
            {
                return 'Ошибка! Треугольник не существует'
            },
            getArea() 
            {
                return 'Ошибка! Треугольник не существует'
            }
        }
    }
}