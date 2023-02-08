import { Component, OnInit } from '@angular/core';
import { ICartItem } from '../models/cart.model';
import { IProduct } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productsInCart: IProduct[] = [];

  constructor(private cartService: CartService, private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProductsInCart();
  }

  removeCartItem(productId: number) {
    let confirmed = confirm('Are you sure?')
    if (confirmed) {
      this.cartService.removeCartItem(1, productId)
        .subscribe(res => this.getProductsInCart())
    }
  }

  getProductsInCart() {
    this.productsInCart = [];
    this.cartService.getCartByCustomerId(1)
      .subscribe(response => {
        const cartItems = response.cartItems;

        this.productService.getProducts()
          .subscribe(res => {
            const allProducts = res.data;

            cartItems.forEach(item => {
              const foundProductById = allProducts.find(product => product.id === item.productId);
              if (foundProductById) {
                this.productsInCart.push(foundProductById);
              }
            })

          });
      });
  }

}
