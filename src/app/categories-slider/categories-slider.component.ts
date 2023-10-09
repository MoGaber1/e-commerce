import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Categories} from '../interfaces/categories'

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.css']
})
export class CategoriesSliderComponent {

  categoriesList: Categories[]=[]

  constructor (private _ProductsService:ProductsService){}

ngOnInit(): void {

  this._ProductsService.getCategories().subscribe({
    next:(response)=>{
    this.categoriesList = response.data;
    console.log(this.categoriesList);


  }
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
      items: 2
    },
  
    400: {
      items: 3
    },
    600: {
      items: 4
    },
    740: {
      items: 5
    },
    940: {
      items: 7
    }

  },
  nav: true
}


}
