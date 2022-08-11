'use strict';

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;

    this.releaseDate = releaseDate;

    this.pagesCount = pagesCount;

    this.state = 100;

    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  get state() {
    return this._state;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);

    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);

    this.author = author;

    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);

    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);

    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);

    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;

    this.books = [];
  }

  addBook(book) {
    if (book._state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      for (type in this.books[i]) {
        if (this.books[i][type] === value) {
          return this.books[i];
        }
      }
    }

    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        let book = this.books[i];

        this.books.splice(i, 1);

        return book;
      }
    }

    return null;
  }
}

class Student {
  constructor(name) {
    this.name = name;

    this.marks = {};
  }

  addMark(mark, subjectName) {
    if (!this.marks[subjectName]) {
      this.marks[subjectName] = [];
    }

    if (mark > 5 || mark < 1 || typeof mark !== 'number') {
      console.log(`Ошибка, оценка должна быть числом от 1 до 5`);

      return 0;
    }

    this.marks[subjectName].push(mark);
  }

  getAverageBySubject(subjectName) {
    let sum = 0;

    let averageBySubject = 0;

    if (!this.marks[subjectName]) {
      console.log(`${subjectName} - несуществующий предмет!`);

      return 0;
    }

    for (let i = 0; i < this.marks[subjectName].length; i++) {
      sum += this.marks[subjectName][i];
    }

    averageBySubject = sum / this.marks[subjectName].length;

    return averageBySubject;
  }

  getAverage() {
    let count = 0;

    let sum = 0;

    let average = 0;

    for (let key in this.marks) {
      sum += this.getAverageBySubject(key);

      count++;
    }

    average = sum / count;

    return average;
  }

  exclude(reason) {
    delete this.marks;

    this.excluded = reason;
  }
}
