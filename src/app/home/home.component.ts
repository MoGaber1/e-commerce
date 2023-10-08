import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { Product } from '../interfaces/product';
import { CartService } from '../Services/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  products:Product[]=[];
  searchTerm:string = '';

constructor (private _ProductsService:ProductsService,
  private _CartService:CartService){

}


addToCart(productId:any){

  this._CartService.addToCart(productId).subscribe({
    next:(response)=> {
      this._CartService.numOfItems.next(response.numOfCartItems),
      console.log(response)},
    error:(err)=> console.log(err)

  })
}


ngOnInit(): void {

this._ProductsService.getProducts().subscribe({
  next : (response) => this.products = response.data
})

}



}
