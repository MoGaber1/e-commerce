export interface Product {
  _id: number;
  imageCover: string;
  category:{name: string};
  title: string;
  price:number;
  ratingsAverage:number
}
