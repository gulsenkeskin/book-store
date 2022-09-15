import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  //parent componentten data almak için ınput kullanılır//parent'tan gönderdiğimiz book parametresi bu inputtaki book değerine eşitlenir.
  @Input() book: Book = {} as Book;

  //parent componenete data göndermek için output kullanılır

  // @Output() bookEmitter = new EventEmitter<Book>();



  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  addToCart() {
    this.cartService.add(this.book);
    // this.bookEmitter.emit(this.book);
  }

}
