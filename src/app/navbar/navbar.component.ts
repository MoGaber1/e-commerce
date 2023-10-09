import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLogin:boolean= false;
  cartNumbers:number=0;


  logOut(){
    this._AuthService.logOut();
  }



  constructor (private _AuthService:AuthService,private _Router:Router, private _CartService:CartService){



    _AuthService.userData.subscribe({
      next:()=>{
        if (_AuthService.userData.getValue() !== null){
          this.isLogin = true;
        }
        else {
          this.isLogin= false;
          // this._Router.navigate(['/login'])

        }
      }
    })

  }



ngOnInit(): void {
      this._CartService.numOfItems.subscribe({
      next:(res)=>{this.cartNumbers=res,
        console.log(this.cartNumbers)

      },
      error:(err)=> console.log(err)

    }),

    this._CartService.getCart().subscribe({
      next:(response)=>{
        this.cartNumbers = response.numOfCartItems
      }
    })



}








}
