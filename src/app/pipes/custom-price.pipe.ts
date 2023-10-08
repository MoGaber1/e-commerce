import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPrice'
})
export class CustomPricePipe implements PipeTransform {

  transform(productPrice: string): string {
    return `${productPrice}
    -20% `;
  }

}
