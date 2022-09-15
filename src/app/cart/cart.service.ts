import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Book> = [];

  constructor(private cartService: CartService) { }

  add(book: Book) {
    this.cart.push(book);
  }
}
