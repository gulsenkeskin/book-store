import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Book> = [];

  constructor() { }

  add(book: Book): void {
    this.cart.push(book);
  }

  get(): Array<Book> {
    return this.cart;
  }
  remove(book: Book): void {
    const index: number = this.cart.indexOf(book);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
}
