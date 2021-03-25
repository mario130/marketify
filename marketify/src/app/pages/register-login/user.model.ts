import { ICart } from "./auth.service";

export class User {
  constructor(public email: string, public _id: string, public token: string, public purchases: ICart[]) {}
}
