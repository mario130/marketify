export class User {
  constructor(public email: string, public _id: string, public token: string, public cart: [{name: string, price: number}]) {}
}
