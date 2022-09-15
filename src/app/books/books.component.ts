import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    {
      name: 'Clean Code',
      author: "Robert C Martin",
      image: "https://images-na.ssl-images-amazon.com/images/I/41BsaF+yiSL._SX373_BO1,204,203,200_.jpg"
    },
    {
      name: "The Pragmatic Programmer",
      author: "David Thomas",
      image: "https://m.media-amazon.com/images/I/51W1sBPO7tL._AC_SY780_.jpg"
    }
  ]





  isShowing: boolean = true;






  constructor() { }

  ngOnInit(): void {
  }

}


interface Book {
  name: string
  author: string
  image: string
}
