import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import '../types/Book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  //parent componentten data almak için ınput kullanılır//parent'tan gönderdiğimiz book parametresi bu inputtaki book değerine eşitlenir.
  @Input() book: Book = {} as Book;

  //parent componenete data göndermek için output kullanılır

  @Output() bookEmitter = new EventEmitter<Book>();



  constructor() { }

  ngOnInit(): void {
  }

  addToCard() {
    this.bookEmitter.emit(this.book);

  }

}
