import { Injectable } from '@angular/core';

@Injectable(
  //Diğer componentlerden de erişilebilsin diye bunu sildim
  //   {
  //   providedIn: 'root'
  // }
)
export class BooksService {

  constructor() { }

  getBooks(): Book[] {
    return [
      {
        name: 'Clean Code',
        author: "Robert C Martin",
        image: "https://images-na.ssl-images-amazon.com/images/I/41BsaF+yiSL._SX373_BO1,204,203,200_.jpg",
        amount: 700,
      },
      {
        name: "The Pragmatic Programmer",
        author: "David Thomas",
        image: "https://m.media-amazon.com/images/I/51W1sBPO7tL._AC_SY780_.jpg",
        amount: 800
      },
      {
        name: 'Clean Code',
        author: "Robert C Martin",
        image: "https://images-na.ssl-images-amazon.com/images/I/41BsaF+yiSL._SX373_BO1,204,203,200_.jpg",
        amount: 700,
      },
      {
        name: "The Pragmatic Programmer",
        author: "David Thomas",
        image: "https://m.media-amazon.com/images/I/51W1sBPO7tL._AC_SY780_.jpg",
        amount: 800
      }
    ];
  }
}
