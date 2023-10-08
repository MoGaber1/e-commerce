import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

brandsList:any[]=[]

  constructor (private _ProductsService:ProductsService){

  }

  ngOnInit(): void {
    this._ProductsService.getBrands().subscribe({

next: (response)=>{this.brandsList=response.data}
    })
  }


}
