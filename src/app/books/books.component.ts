import { Component, OnInit } from '@angular/core';
import '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) { }

  books: Book[] = [];

  card: Book[] = [];


  isShowing: boolean = true;


  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.books = this.booksService.getBooks();
  }

  //book componentten gönderdiğimiz addToCard methodunun içindeki this.bookEmitter.emit(this.book) e parametre olarak verdiğimiz book buraya gelir
  addToCard(book: Book) {

  }
}


// ngOnInit constructordan sonra çağrılır

