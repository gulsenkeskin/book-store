import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  carts: Array<Book> = [];
  ngOnInit(): void {
    this.carts = this.getCart();
  }
  getCart(): Array<Book> {
    return this.cartService.get();
  }

}
