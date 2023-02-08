import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddCartItemResponse, ICart, IRemoveCartItemResponse } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartByCustomerId(customerId: number) {
    return this.http.get<ICart>('https://localhost:7098/api/cart/' + customerId)
  }

  addCartItem(customerId: number, productId: number, productPrice: number) {
    return this.http.post<IAddCartItemResponse>(`https://localhost:7221/api/Cart/AddItem?customerId=${customerId}&productId=${productId}&productPrice=${productPrice}`, {});
  }

  removeCartItem(customerId: number, productId: number) {
    return this.http.put<IRemoveCartItemResponse>(`https://localhost:7221/api/Cart/RemoveItem?customerId=${customerId}&productId=${productId}`, {});
  }

}

