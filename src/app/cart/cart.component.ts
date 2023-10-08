import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cartDetails:any = null

  constructor( private _CartService:CartService ){

  }

removeItem(productId:string){
  this._CartService.removeCartItem(productId).subscribe({
    next:(response)=> this.cartDetails=response.data,
    error:(err)=> console.log(err)
  })
}
updateProductCount(productId:string,counter:number){
  this._CartService.updateProductCount(productId,counter).subscribe({
    next:(response)=> this.cartDetails=response.data,
    error:(err)=> console.log(err)
  })
}

  ngOnInit(): void {
    this._CartService.getCart().subscribe({
      next:(response)=> this.cartDetails=response.data,
      error:(err)=> console.log(err)


    })
  }

}
