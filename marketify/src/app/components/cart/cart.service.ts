import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  isShown = false
  isShownObs = new BehaviorSubject<boolean>(false);

  toggleCart(){
    this.isShown = !this.isShown
    this.isShownObs.next(this.isShown)
  }
}
