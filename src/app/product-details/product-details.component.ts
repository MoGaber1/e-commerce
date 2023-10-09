import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../Services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../Services/cart.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductsService:ProductsService,
    private _CartService:CartService,
    private _ToastrService:ToastrService
    ){

  }

  productId:any;
  productDetails:any

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((params)=>{
// params.get('id');
this.productId = params.get('id');
  });

  this._ProductsService.getProductsDetails(this.productId).subscribe({
    next:(response)=> this.productDetails = response.data
  })
console.log();

}


addToCart(productId:any){

  this._CartService.addToCart(productId).subscribe({
    next:(response)=> {
      this._CartService.numOfItems.next(response.numOfCartItems),
      this._ToastrService.success(response.message)
      console.log(response)},
    error:(err)=> console.log(err)

  })
}


customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },

  },
  nav: true
}



}
