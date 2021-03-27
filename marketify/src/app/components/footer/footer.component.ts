import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isProd: boolean;

  constructor() {
    this.isProd = environment.production
  }

  ngOnInit(): void {
  }



}
