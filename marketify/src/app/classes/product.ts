import { IProduct } from "../interfaces/products";

export class Product implements IProduct {
  name:string
  category:string
  type:string
  price:number
  variations:Array<string>
  rating:number
  description:object
  constructor(
    name:string,
    category:string,
    type:string,
    price:number,
    variations:Array<string>,
    rating:number,
    description:object){
      this.name=name;
      this.category=category;
      this.type=type;
      this.price=price;
      this.variations=variations;
      this.rating=rating,
      this.description=description;
    }
}
