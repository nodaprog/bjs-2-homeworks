function Student(name, gender, age) 
{
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function(subjectName) 
{
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function(mark)
{
  if (this.marks === undefined)
  {
    this.marks = [];
    this.marks.push(mark);
  }
  else
  {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...mark)
{
  if (this.marks === undefined)
  {
    this.marks = [];
    this.marks.push(...mark);
  }
  else
  {
    this.marks.push(...mark);
  }
}

Student.prototype.getAverage = function()
{
  let sum = 0;
  let avg = 0;

  for (let i in this.marks)
  {
    sum += this.marks[i];
  }
  avg = sum / this.marks.length;

  return avg;
}

Student.prototype.exclude = function(reason)
{
  delete this.marks;
  delete this.subject;

  this.excluded = reason;
}