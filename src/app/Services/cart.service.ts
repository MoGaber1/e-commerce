import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

numOfItems:BehaviorSubject<number> = new BehaviorSubject(0)



  constructor(private _HttpClient: HttpClient) {
    this.getCart().subscribe({
      next:(response) => {
        this.numOfItems.next(response.numOfCartItems),
        console.log(response)}

    })
  }

  headers: any = { token: localStorage.getItem('userToken') };

  addToCart(productIdReceiver: string): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { productId: productIdReceiver },
      {
        //configs
        headers: this.headers,
      }
    );
  }

  getCart(): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/cart`,

    );
  }
  removeCartItem(productId: string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    );
  }
  updateProductCount(productId: string, counter: number): Observable<any> {
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        count: counter,
      }
    );
  }
  onlinePayment(shippingAddress:any,cartId:string): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddressInfo:shippingAddress
      }
    );
  }






}
