export interface IProduct {
  name:string,
  category:string,
  type:string,
  price:number,
  variations:{color: string, imageUrl: string}[],
  rating:number,
  description:{title: string, body: string},
  features:{title: string, description: string, imageUrl: string}[]
}
